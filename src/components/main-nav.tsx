import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import ButtonAnimatedGradient from "./button-animated-gradient";

const data = {
  items: [
    {
      isDropdown: true,
      text: "Community",
    },
    {
      isDropdown: false,
      text: "Wiki",
      link: "/wiki",
    },
    {
      isDropdown: false,
      text: "Discord",
    },
    {
      isDropdown: false,
      text: "Map",
    },
  ],
};

export const MainNav = () => {
  return (
    <div className='hidden lg:grid gap-4 h-16 items-center justify-between md:grid-cols-[176px_auto_auto]'>
      <a className='inline-block' href='/'>
        <img
          src='/src/assets/light-logo.svg'
          alt='WesterosCraft Logo'
          width={176}
          height={24}
          // priority
        />
      </a>
      <NavigationMenu className='h-16 flex items-center space-x-6 md:space-x-2 lg:space-x-6 font-medium'>
        <NavigationMenuList>
          {data?.items?.map((n: any) =>
            n.isDropdown.discriminant ? (
              <NavigationMenuItem key={n.text}>
                <NavigationMenuTrigger className='bg-transparent text-white hover:bg-primaryDark-light hover:text-primaryGold-300 focus:bg-primaryDark-light focus:text-primaryGold-400 rounded-none'>
                  {n.text}
                </NavigationMenuTrigger>
                <NavigationMenuContent className='bg-primaryDark rounded-none'>
                  <ul className='grid gap-3 p-6 md:w-[400px] rounded-none'>
                    {n.isDropdown?.value?.map((x: any) => (
                      <ListItem key={x.text} href={x.link} title={x.text}>
                        {x.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={n.text}>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} rounded-none bg-transparent text-white hover:bg-primaryDark-light hover:text-primaryGold-300 focus:bg-primaryDark-light focus:text-primaryGold-400`}
                >
                  <a href={n.isDropdown?.value?.link || n?.link}>{n?.text}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
      <div className='ml-auto'>
        <a href='/join'>
          <Button
            size='lg'
            className='bg-white text-black hover:bg-white/90 font-semibold'
          >
            Join Now
          </Button>
          {/* <ButtonAnimatedGradient /> */}
        </a>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "text-white block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-primaryRed focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-slate-300'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
