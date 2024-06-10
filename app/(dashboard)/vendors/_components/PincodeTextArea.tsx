"use client";
import ChipListInput from "@/components/Internals/chipListInput";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
const PincodeTextArea = ({ vendorId }: { vendorId: string }) => {
  const [pincodes, setPincodes] = useState<string[]>();
  const FormSchema = z.object({
    pincodes: z
      .array(z.string())
      .refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
  });
  const [fetchPincode, setFetchPincode] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pincodes: [],
    },
  });
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(1);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const res = await fetch("/api/removedAssignedPincode", {
      method: "POST",
      body: JSON.stringify({
        vendorId: vendorId,
        pincodes: form.getValues("pincodes"),
      }),
    });
    const result = await res.json();
    if (res.ok) {
      setFetchPincode(prev => !prev);
      form.reset()
      toast({
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-green-500">{result.message}</code>
          </pre>
        ),
      });
    }
    toast({
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-green-500">{result.message}</code>
        </pre>
      ),
    });
  }

  useEffect(() => {
    (async function () {
      const res = await fetch("/api/getvendorpincodes", {
        method: "POST",
        body: JSON.stringify({
          vendorId: vendorId,
        }),
        cache: "no-cache",
      });

      const data = await res.json();
      setPincodes(data.data);
    })()
  }, [fetchPincode]);

  return (
    <div className=" w-[60%] space-y-4 text-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="pincodes"
            render={() => (
              <FormItem>
                <div className="mb-4 flex w-full items-center justify-between">
                  <FormLabel className="text-base">All Pincodes</FormLabel>
                  <FormDescription>
                    {pincodes && (
                      <div className="flex items-center space-x-2 px-4">
                        <Checkbox
                          onCheckedChange={(checked) => {
                            router.refresh();
                            return checked
                              ? form.setValue("pincodes", pincodes)
                              : form.resetField("pincodes");
                          }}
                          id="select all"
                        />
                        <label
                          htmlFor="select all"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Select All
                        </label>
                      </div>
                    )}
                  </FormDescription>
                </div>
                <ScrollArea className=" h-60">
                  <div className=" grid grid-cols-4 h-full gap-4 bg-tertiaryBackground p-4 ">
                    {pincodes?.map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="pincodes"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-xl bg-secondaryBackground p-2 px-3"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item,
                                        ),
                                      );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    {!pincodes && (
                      <p className=" w-max">
                        No pincode found. Please add new pincode below
                      </p>
                    )}
                  </div>
                </ScrollArea>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.getValues("pincodes").length > 0 && (
            <Button
              type="submit"
              className=" mt-2 flex !h-max w-max items-center space-x-2 rounded-xl !bg-[#c43c3c] px-4 !text-white"
            >
              <Trash size={14} />
              <span>Delete</span>
            </Button>
          )}
        </form>
      </Form>
      <ChipListInput
        setFetchPincode={setFetchPincode}
        setIsLoading={setIsLoading}
        setProgress={setProgress}
        vendorId={vendorId}
        pincodes={pincodes}
        key={""}
      />
    </div>
  );
};

export default PincodeTextArea;
