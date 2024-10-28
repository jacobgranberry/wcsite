import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

export function BentoGrid() {
  const features = [
    {
      title: "Begin Your Watch",
      description:
        "Track and manage your project issues with ease using our intuitive interface.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 dark:border-b lg:border-r border-neutral-800",
    },
    {
      title: "Keep up with the community",
      description:
        "The Rookery is a community created magazine that details all the latest happenings in the realm of WesterosCraft. Keep up to date with the server!",
      skeleton: <SkeletonTwo />,
      className: "dark:border-b col-span-1 lg:col-span-2 border-neutral-800",
    },
    {
      title: "Explore Westeros on YouTube",
      description:
        "Tune in to our long-running series Youtube series WesterosCraft Walks, a guided build series hosted by community member Chris the Archer.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 dark:lg:border-r border-neutral-800",
    },
    {
      title: "Deploy in seconds",
      description:
        "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className='relative z-20 py-10 lg:py-40 max-w-7xl mx-auto'>
      <div className='px-8'>
        <h4 className='text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight text-white font-medium dark:text-black'>
          Packed with thousands of features
        </h4>

        <p className='text-sm lg:text-base  max-w-2xl  my-4 mx-auto dark:text-neutral-500 text-center font-normal text-neutral-300'>
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
      </div>

      <div className='relative '>
        <div className='grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800'>
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=' h-full w-full'>{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=' max-w-5xl mx-auto text-left tracking-tight dark:text-black text-white text-xl md:text-2xl md:leading-snug'>
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className='relative flex py-8 px-2 gap-10 h-full'>
      <div className='w-full  p-5  mx-auto dark:bg-white bg-neutral-900 shadow-2xl group h-full'>
        <div className='flex flex-1 w-full h-full flex-col space-y-2  '>
          {/* TODO */}
          <img
            src='/src/assets/harrenhal-construction.png'
            alt='header'
            width={800}
            height={600}
            className='h-full w-full aspect-square object-contain object-left-top rounded-sm'
          />
        </div>
      </div>

      {/* <div className='absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t dark:from-white from-black dark:via-white via-black to-transparent w-full pointer-events-none' />
      <div className='absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none' /> */}
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className='relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden'>
      {/* TODO */}
      <MarqueeDemo />

      {/* <div className='absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none' />
      <div className='absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none' /> */}
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a
      href='https://www.youtube.com/playlist?list=PLmia7qhVwFYycNvdD6nnIF6w6KX20wnvm'
      target='__blank'
      className='relative flex gap-10  h-full group/image'
    >
      <div className='w-full  mx-auto bg-transparent dark:bg-transparent group h-full'>
        <div className='flex flex-1 w-full h-full flex-col space-y-2  relative'>
          {/* TODO */}
          {/* <IconBrandYoutubeFilled className='h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto ' /> */}
          <img
            src='/src/assets/og.jpg'
            alt='header'
            width={800}
            height={800}
            className='h-full w-full aspect-square object-contain object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200'
          />
        </div>
      </div>
    </a>
  );
};

export const SkeletonFour = () => {
  return (
    <div className='h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10'></div>
  );
};

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const RookeryCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <img className='rounded-full' width='32' height='32' alt='' src={img} />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{username}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm'>{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((review) => (
          <RookeryCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((review) => (
          <RookeryCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
  );
}
