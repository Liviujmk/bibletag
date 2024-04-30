import { useState } from "react";
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form";

const options = [
  { value: "backlog", label: "Backlog" },
  { value: "todo", label: "Todo" },
  { value: "in progress", label: "In Progress" },
  { value: "done", label: "Done" },
  { value: "canceled", label: "Canceled" },
];

interface Props {
  tags: string[]
  append: UseFieldArrayAppend<{
    title: string;
    content: string;
    tags: string[];
  }, never>
  remove: UseFieldArrayRemove
}

const TagsSelect = ({ tags, append, remove }: Props) => {
  const handleSelectOption = (option: string) => {
    const tagIndex = tags.indexOf(option);
    if (tagIndex === -1) {
      append(option);
    } else {
      remove(tagIndex);
    }
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild className="w-full justify-start">
          <Button variant="outline" size="sm" className="h-9 border-dashed">
            <PlusCircledIcon className="mr-2 h-5 w-5" />
            <span className="text-sm font-normal text-muted-foreground">Add tags</span>
            {tags?.length > 0 && (
              <>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal lg:hidden"
                >
                  {tags.length}
                </Badge>
                <div className="hidden space-x-1 lg:flex">
                  {tags.length > 5 ? (
                    <Badge
                      variant="secondary"
                      className="rounded-sm px-1 font-normal"
                    >
                      {tags.length} selected
                    </Badge>
                  ) : (
                    tags.map((tag) => (
                      <Badge
                        variant="secondary"
                        key={tag}
                        className="rounded-sm px-1 font-normal w-auto"
                      >
                        {tag}
                      </Badge>
                    ))
                  )}
                </div>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search tags" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = tags.includes(option.value);
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => handleSelectOption(option.value)}
                      className="cursor-pointer"
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-black",
                          isSelected
                            ? "text-primary-foreground bg-black"
                            : "opacity-100 [&_svg]:invisible"
                        )}
                      >
                        <CheckIcon className={cn("h-4 w-4")} />
                      </div>
                      <span>{option.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TagsSelect;
