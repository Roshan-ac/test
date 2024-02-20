import { ACFullBookingsInterface } from "@/interfaces/FullBookings/FullACBookings";

const ACReport = ({ formData }: { formData: ACFullBookingsInterface }) => {
  // const { problemValue, bodyValue } = formData;
  const problemValue: string = "PO",
    bodyValue: string = "B1";

  return (
    <div className="font-primary space-y-4 font-normal text-md px-8">
      {problemValue !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Fuctional Issues</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {problemValue === "P0" ? "No" : "Yes"}
              </span>
            </li>
          </ul>
        </div>
      )}
      {bodyValue !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Physical Defects</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {bodyValue == "B1" ? "Yes" : "No"}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ACReport;
