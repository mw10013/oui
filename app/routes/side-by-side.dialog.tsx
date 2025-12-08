"use client";

import {
  SideBySidePage,
  SideBySideSection,
} from "@/components/side-by-side-page";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import * as Oui from "@/registry/default/ui/oui-index";
import * as Rac from "react-aria-components";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function OuiDialogDemo() {
  return (
    <Rac.DialogTrigger>
      <Oui.Button variant="outline">Edit Profile</Oui.Button>
      <Oui.ModalOverlay isDismissable>
        <Oui.Modal className="sm:max-w-[425px]">
          <Oui.Dialog>
            <Rac.Form>
              <Oui.DialogHeader>
                <Oui.Heading slot="title">Edit profile</Oui.Heading>
                <Oui.DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </Oui.DialogDescription>
              </Oui.DialogHeader>
              <div className="grid gap-4 py-4">
                <Oui.TextField
                  name="name"
                  autoFocus
                  defaultValue="Pedro Duarte"
                >
                  <Oui.FieldLabel>Name</Oui.FieldLabel>
                  <Oui.Input />
                  <Oui.FieldError />
                </Oui.TextField>
                <Oui.TextField name="username" defaultValue="@peduarte">
                  <Oui.FieldLabel>Username</Oui.FieldLabel>
                  <Oui.Input />
                  <Oui.FieldError />
                </Oui.TextField>
              </div>
              <Oui.DialogFooter>
                <Oui.Button variant="outline" slot="close">
                  Cancel
                </Oui.Button>
                <Oui.Button type="submit" slot="close">
                  Save changes
                </Oui.Button>
              </Oui.DialogFooter>
            </Rac.Form>
          </Oui.Dialog>
        </Oui.Modal>
      </Oui.ModalOverlay>
    </Rac.DialogTrigger>
  );
}

export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function OuiDialogCloseButton() {
  return (
    <Rac.DialogTrigger>
      <Oui.Button variant="outline">Share</Oui.Button>
      <Oui.ModalOverlay isDismissable>
        <Oui.Modal className="sm:max-w-md">
          <Oui.Dialog>
            <Oui.DialogHeader>
              <Oui.Heading slot="title">Share link</Oui.Heading>
              <Oui.DialogDescription>
                Anyone who has this link will be able to view this.
              </Oui.DialogDescription>
            </Oui.DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Oui.FieldLabel className="sr-only">Link</Oui.FieldLabel>
                <Oui.Input
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
            </div>
            <Oui.DialogFooter className="sm:justify-start">
              <Oui.Button variant="secondary" slot="close">
                Close
              </Oui.Button>
            </Oui.DialogFooter>
          </Oui.Dialog>
        </Oui.Modal>
      </Oui.ModalOverlay>
    </Rac.DialogTrigger>
  );
}

export function DialogAlert() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function OuiDialogAlert() {
  return (
    <Rac.DialogTrigger>
      <Oui.Button variant="outline">Delete Account</Oui.Button>
      <Oui.ModalOverlay isKeyboardDismissDisabled>
        <Oui.Modal>
          <Oui.Dialog role="alertdialog">
            <Oui.DialogHeader>
              <Oui.Heading variant="alert" slot="title">
                Are you absolutely sure?
              </Oui.Heading>
              <Oui.DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </Oui.DialogDescription>
            </Oui.DialogHeader>
            <Oui.DialogFooter>
              <Oui.Button variant="outline" slot="close" autoFocus>
                Cancel
              </Oui.Button>
              <Oui.Button variant="destructive" slot="close">
                Delete Account
              </Oui.Button>
            </Oui.DialogFooter>
          </Oui.Dialog>
        </Oui.Modal>
      </Oui.ModalOverlay>
    </Rac.DialogTrigger>
  );
}

export default function RouteComponent() {
  return (
    <SideBySidePage
      title="Dialog"
      sourceHref="https://github.com/mw10013/oui/blob/main/app/routes/side-by-side.dialog.tsx"
    >
      <SideBySideSection
        title="Demo"
        shadcn={<DialogDemo />}
        oui={<OuiDialogDemo />}
      />
      <SideBySideSection
        title="Close Button"
        shadcn={<DialogCloseButton />}
        oui={<OuiDialogCloseButton />}
      />
      <SideBySideSection
        title="Alert"
        shadcn={<DialogAlert />}
        oui={<OuiDialogAlert />}
      />
    </SideBySidePage>
  );
}
