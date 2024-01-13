// import React from "react";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

// const FiltersBox = () => {
//   return (
//     <div className=" ">
//       <div className=" w-max bg-tertiaryBackground h-max rounded-[14px] px-8" >
//         <SearchBar />
//       </div>
//     </div>
//   );
// };
function SearchBar() {
  return (
    <div className="flex h-max items-center">
      <Search className=" text-secondaryText" />
      <Input
        className=" border-b border-none !bg-transparent"
        type="email"
        placeholder="Search"
      />
    </div>
  );
}

// export default FiltersBox;

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function FilterMenubar() {
  return (
    <div className="sticky top-[50px] z-10 flex  items-center bg-secondaryBackground px-8  h-max">
      <div className=" h-[38px] rounded-[16px] !bg-tertiaryBackground px-6">
        <SearchBar />
      </div>
      <Menubar className="grid h-max w-full grid-cols-5 gap-2 border-none !bg-transparent p-8">
        <MenubarMenu>
          <MenubarTrigger className="flex h-[38px] w-full rounded-[16px] !bg-tertiaryBackground px-4 pr-12">
            <div className="flex w-full items-center gap-2">
              <Plus />
              <span>Status</span>
            </div>
          </MenubarTrigger>
          <MenubarContent className=" !bg-tertiaryBackground">
            <MenubarItem className=" hover:bg-primaryBackground">
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="flex h-[38px] w-full rounded-[16px] !bg-tertiaryBackground px-4 pr-12">
            <div className="flex w-full items-center gap-2">
              <Plus />
              <span>Type</span>
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              Always Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              Reload <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Toggle Fullscreen</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="flex h-[38px] w-full rounded-[16px] !bg-tertiaryBackground px-4 pr-12">
            <div className="flex w-full items-center gap-2">
              <Plus />
              <span>Type</span>
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="flex h-[38px] w-full rounded-[16px] !bg-tertiaryBackground px-4 pr-12">
            <div className="flex w-full items-center gap-2">
              <Plus />
              <span>Type</span>
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="flex h-[38px] w-full rounded-[16px] !bg-tertiaryBackground px-4 pr-12">
            <div className="flex w-full items-center gap-2">
              <Plus />
              <span>Type</span>
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="benoit">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem inset>Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
