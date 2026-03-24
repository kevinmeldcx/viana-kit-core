import { Metadata } from "next"
import { AppDrawer, AppDrawerTrigger, AppDrawerContent, AppDrawerHeader, AppDrawerTitle, AppDrawerDescription, AppDrawerFooter, AppDrawerClose, AppButton } from "@viana/ui"

export const metadata: Metadata = {
  title: "Drawer - Viana Kit",
  description: "A drawer component for navigation or quick actions.",
}

export default function DrawerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Drawer
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          A drawer component for navigation or quick actions that slides in from the side.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          Basic Example
        </h2>
        <div className="rounded-lg border p-8">
          <AppDrawer>
            <AppDrawerTrigger asChild>
              <AppButton>Open Drawer</AppButton>
            </AppDrawerTrigger>
            <AppDrawerContent>
              <AppDrawerHeader>
                <AppDrawerTitle>Edit Profile</AppDrawerTitle>
                <AppDrawerDescription>
                  Make changes to your profile here. Click save when you are done.
                </AppDrawerDescription>
              </AppDrawerHeader>
              <div className="px-4 py-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="your@email.com" />
                </div>
              </div>
              <AppDrawerFooter>
                <AppButton>Save Changes</AppButton>
                <AppDrawerClose asChild>
                  <AppButton variant="outline">Cancel</AppButton>
                </AppDrawerClose>
              </AppDrawerFooter>
            </AppDrawerContent>
          </AppDrawer>
        </div>
      </div>
    </div>
  )
}