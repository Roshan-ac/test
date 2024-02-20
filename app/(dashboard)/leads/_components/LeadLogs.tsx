import { Label } from "@/components/ui/label";

const LeadLogs = () => {
  return (
    <div className="h-max w-full bg-tertiaryBackground pb-4">
      <div className="p-6 text-hoverColor">
        <div>
          <h1>Leads Logs :</h1>
        </div>

        <div className="my-6 flex flex-col space-y-6">
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">11:12:24 15/09/2023 :</span>
            <span className="inline-block w-full">
              Called Customer - Told To Reschedule
            </span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">11:12:24 15/09/2023 :</span>
            <span className="inline-block w-full">
              Rescheduled For 2023/12/29 10:00 AM - 01:00 PM
            </span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">11:12:24 15/09/2023 :</span>
            <span className="inline-block w-full">
              Called Customer - Pickup Confirmed
            </span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">11:12:24 15/09/2023:</span>
            <span className="inline-block w-full">Out For Pickup</span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">11:12:24 15/09/2023 :</span>
            <span className="inline-block w-full">
              Requote - Box, Charger, Below Average
            </span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">11:12:24 15/09/2023 :</span>
            <span className="inline-block w-full">
              Requote - Box, Charger, Below Average, Screen Scratches
            </span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">11:12:24 15/09/2023 :</span>
            <span className="inline-block w-full">
              Failed - Requote Price Not Accepted
            </span>
          </Label>
          <Label htmlFor="terms" className=" flex w-full space-x-4  ">
            <span className="inline-block w-[40%]">11:12:24 15/09/2023 :</span>
            <span className="inline-block w-full">
              Failed Confirmed - Photos Accepted
            </span>
          </Label>
        </div>
      </div>
    </div>
  );
};

export default LeadLogs;
