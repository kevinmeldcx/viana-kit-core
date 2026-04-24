import Image from "next/image"
import AudienceMeasurement from "../../../../packages/ui/src/assets/Service-applets-apps/audience-measurement.png"
import Coatro from "../../../../packages/ui/src/assets/Service-applets-apps/coatro-app.png"
import ContentEffectiveness from "../../../../packages/ui/src/assets/Service-applets-apps/content-effectiveness.png"
import HopTracking from "../../../../packages/ui/src/assets/Service-applets-apps/hop-tracking.png"
import Journeys from "../../../../packages/ui/src/assets/Service-applets-apps/journeys-app.png"
import PeopleCounting from "../../../../packages/ui/src/assets/Service-applets-apps/people-counting.png"
import SAMiForEnvironment from "../../../../packages/ui/src/assets/Service-applets-apps/sami-for-environment.png"
import ShelfEngagement from "../../../../packages/ui/src/assets/Service-applets-apps/shelf-engagement.png"
import TrafficManagement from "../../../../packages/ui/src/assets/Service-applets-apps/traffic-management.png"
import Petra from "../../../../packages/ui/src/assets/Service-applets-apps/petra.png"
import SAMGeneric from "../../../../packages/ui/src/assets/Service-applets-apps/sam-viana-generic.png"
import ZoneEngagement from "../../../../packages/ui/src/assets/Service-applets-apps/zone-engagement.png"

const APPLETS = [
  {
    group: "Service Applets",
    items: [
      { name: "Audience Measurement",  image: AudienceMeasurement },
      { name: "Content Effectiveness", image: ContentEffectiveness },
      { name: "Hop Tracking",          image: HopTracking },
      { name: "People Counting",       image: PeopleCounting },
      { name: "Petra",                 image: Petra },
      { name: "SAM (Generic)",         image: SAMGeneric },
      { name: "SAMi For Environment",  image: SAMiForEnvironment },
      { name: "Shelf Engagement",      image: ShelfEngagement },
      { name: "Traffic Management",    image: TrafficManagement },
      { name: "Zone Engagement",       image: ZoneEngagement },
    ],
  },
  {
    group: "Apps",
    items: [
      { name: "Coatro",   image: Coatro },
      { name: "Journeys", image: Journeys },
    ],
  },
]

export function ServiceAppletsSection() {
  return (
    <div className="space-y-14">
      {APPLETS.map((group) => (
        <div key={group.group} className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {group.group}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {group.items.map(({ name, image }) => (
              <div key={name} className="overflow-hidden rounded-lg border border-border">
                <div className="relative aspect-square w-full bg-muted/30">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <div className="border-t border-border bg-background px-3 py-2">
                  <p className="text-xs font-medium text-foreground leading-snug">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
