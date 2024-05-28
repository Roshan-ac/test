import { ACFullBookingsInterface } from "@/interfaces/FullBookings/FullACBookings";
import { CameraFullBookingsInterface } from "@/interfaces/FullBookings/FullCameraBookings";
import { ConsoleFullBookingsInterface } from "@/interfaces/FullBookings/FullConsoleBookings";
import { DesktopFullBookingsInterface } from "@/interfaces/FullBookings/FullDesktopBookings";
import { DroneFullBookingsInterface } from "@/interfaces/FullBookings/FullDroneBookings";
import { HeadphoneFullBookingsInterface } from "@/interfaces/FullBookings/FullHeadphoneBookings";
import { LaptopFullBookingsInterface } from "@/interfaces/FullBookings/FullLaptopBookings";
import { MacFullBookingsInterface } from "@/interfaces/FullBookings/FullMacBookings";
import { MobileFullBookingsInterface } from "@/interfaces/FullBookings/FullMobileBookings";

import { TabletFullBookingsInterface } from "@/interfaces/FullBookings/FullTabletBookings";
import { WatchFullBookingsInterface } from "@/interfaces/FullBookings/FullWatchBookings";


import MobileReport from "./_components/MobileReport";
import TabletReport from "./_components/TabletReport";
import MacReport from "./_components/MacReport";
import LaptopReport from "./_components/LaptopReport";
import WatchReport from "./_components/WatchReport";
import ConsoleReport from "./_components/ConsoleReport";
import CameraReport from "./_components/CameraReport";
import ACReport from "./_components/ACReport";
import DesktopReport from "./_components/DesktopReport";
import DroneReport from "./_components/DroneReport";
import HeadphoneReport from "./_components/HeadphoneReport";
import TVReport from "./_components/TVReport";
import { deviceType } from "@/interfaces";
import { TvFullBookingsInterface } from "@/interfaces/FullBookings";

const EvaluationReport = ({
  devicetype,
  formData,
}: {
  devicetype: deviceType;
  formData:
    | MobileFullBookingsInterface
    | LaptopFullBookingsInterface
    | TabletFullBookingsInterface
    | MacFullBookingsInterface
    | ConsoleFullBookingsInterface
    | WatchFullBookingsInterface
    | DesktopFullBookingsInterface
    | DroneFullBookingsInterface
    | CameraFullBookingsInterface
    | HeadphoneFullBookingsInterface
    | ACFullBookingsInterface
    | TvFullBookingsInterface;
}) => {
  
  if (devicetype === "mobile") {
    return (
      <div>
        <MobileReport formData={formData as MobileFullBookingsInterface} />
      </div>
    );
  } else if (devicetype === "tablet") {
    return (
      <div>
        <TabletReport formData={formData as TabletFullBookingsInterface} />
      </div>
    );
  } else if (devicetype === "laptop") {
    return (
      <div>
        <LaptopReport formData={formData as LaptopFullBookingsInterface} />
      </div>
    );
  } else if (devicetype === "mac") {
    return (
      <div>
        <MacReport formData={formData as MacFullBookingsInterface} />
      </div>
    );
  } else if (devicetype === "watch") {
    return (
      <div>
        <WatchReport formData={formData as WatchFullBookingsInterface} />
      </div>
    );
  } else if (devicetype === "console") {
    return (
      <div>
        <ConsoleReport formData={formData as ConsoleFullBookingsInterface} />
      </div>
    );
  } else if (devicetype === "camera") {
    return (
      <div>
        <CameraReport formData={formData as CameraFullBookingsInterface} />
      </div>
    );
  } else if (devicetype === "air-conditioner") {
    return (
      <div>
        <ACReport formData={formData as ACFullBookingsInterface} />
      </div>
    );
  } else if (devicetype === "desktop") {
    return (
      <div>
        <DesktopReport formData={formData as DesktopFullBookingsInterface} />
      </div>
    );
  } else if (devicetype === "drone") {
    return (
      <div>
        <DroneReport formData={formData as DroneFullBookingsInterface} />
      </div>
    );
  } else if (devicetype === "headphone") {
    return (
      <div>
        <HeadphoneReport
          formData={formData as HeadphoneFullBookingsInterface}
        />
      </div>
    );
  } else if (devicetype === "tv") {
    return (
      <div>
        <TVReport formData={formData as TvFullBookingsInterface} />
      </div>
    );
  }
};
export default EvaluationReport;
