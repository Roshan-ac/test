import { TvBookingsInterface } from "@/interfaces/FullBookings/FullTVBookings";

const TVReport = ({ formData }: { formData: TvBookingsInterface }) => {
  const { bodycondition, screencondition, screentype, resolution, deviceType } =
    formData;

  return (
    <div className="font-primary space-y-4 font-normal text-md">
      {bodycondition !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Device Usage Marks</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {bodycondition == "B1"
                  ? "Light Usage Signs, Minor body scratch"
                  : bodycondition == "B2"
                  ? "1 or 2 Minor Dents, Major Scratch Colour Loss"
                  : bodycondition == "B3" &&
                    "Major, Multiple Dents, Bend, Cracking Body"}
              </span>
            </li>
          </ul>
        </div>
      )}
      {screencondition !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Screen Condition</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {screencondition == "S1"
                  ? "Flawless"
                  : screencondition == "S2"
                  ? "Dot Lines"
                  : screencondition == "S3" && "Broken"}
              </span>
            </li>
          </ul>
        </div>
      )}
      {screentype !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Screen Type</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {screentype == "T1"
                  ? "LCD"
                  : screentype == "T2"
                  ? "LED"
                  : screentype == "T3"
                  ? "QLED"
                  : screentype == "T4" && "OLED"}
              </span>
            </li>
          </ul>
        </div>
      )}
      {resolution !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Screen Type</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {resolution == "R1"
                  ? "HD Ready"
                  : resolution == "R2"
                  ? "Full HD"
                  : resolution == "R3"
                  ? "Ultra HD (4K)"
                  : resolution == "R4" && "Ultra HD (8K)"}
              </span>
            </li>
          </ul>
        </div>
      )}
      {deviceType !== undefined && (
        <div>
          <h3 className="mt-2.5">
            <div className=" text-sm">Device Type</div>
          </h3>
          <ul className="mt-2.5 ml-8">
            <li className="text-secondary list-outside list-disc">
              <span className="caption text-sm text-surface-text">
                {deviceType == "D1"
                  ? "Normal TV"
                  : deviceType == "D2"
                  ? "Smart TV"
                  : deviceType == "D3" && "Android TV"}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TVReport;
