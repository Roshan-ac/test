"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export const FormSchema = z.object({
  title: z.string({
    required_error: "A title is required.",
  }),
  body: z.string({
    required_error: "A body is required.",
  }),
  city: z.string({
    required_error: "A city is required.",
  }),
});

export function AddNewNotification({}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>();
  const router = useRouter();
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    // setIsLoading(true);
    // const res = await ReschedulePickupDateTime(data);
    // setIsLoading(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" !h-max rounded-xl !bg-[#b3662c] px-8 !text-white">
          Add New Notification
        </Button>
      </DialogTrigger>
      <hr className="mt-3 rounded-full opacity-50" />
      <DialogContent className="text-white sm:max-w-[600px] p-6 flex flex-col justify-start !h-[90%]">
        <DialogHeader>
          <DialogTitle>New Notification</DialogTitle>
        </DialogHeader>
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <Input
                        required
                        onSelect={field.onChange}
                        defaultValue={field.value}
                        type="text"
                        className=" !disabled:bg-secondaryBackground border-b border-none !bg-hoverColor !text-black placeholder:!text-black "
                        placeholder="Enter title"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <Input
                        required
                        onSelect={field.onChange}
                        defaultValue={field.value}
                        type="text"
                        className=" !disabled:bg-secondaryBackground border-b border-none !bg-hoverColor !text-black placeholder:!text-black "
                        placeholder="Enter city"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <Textarea
                        required
                        rows={10}
                        onSelect={field.onChange}
                        defaultValue={field.value}
                        className=" !disabled:bg-secondaryBackground border-b border-none !bg-hoverColor !text-black placeholder:!text-black "
                        placeholder="Enter a body"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                disabled={isLoading}
                className="w-full !bg-green-600 font-semibold"
                type="submit"
              >
                {isLoading ? "Creating" : "Create"}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
