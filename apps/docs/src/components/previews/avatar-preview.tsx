"use client";

import { AppAvatar, AppAvatarFallback, AppAvatarImage } from "@viana/ui";

const AVATAR_SRC = "https://github.com/shadcn.png";

export function AvatarDefaultPreview() {
  return (
    <AppAvatar>
      <AppAvatarImage src={AVATAR_SRC} alt="shadcn" />
      <AppAvatarFallback>CN</AppAvatarFallback>
    </AppAvatar>
  );
}

export function AvatarFallbackPreview() {
  return (
    <AppAvatar>
      <AppAvatarImage src="/broken-image.png" alt="User" />
      <AppAvatarFallback>JD</AppAvatarFallback>
    </AppAvatar>
  );
}

export function AvatarSizesPreview() {
  return (
    <div className="flex items-center gap-4">
      <AppAvatar className="h-6 w-6 text-xs">
        <AppAvatarImage src={AVATAR_SRC} alt="shadcn" />
        <AppAvatarFallback>CN</AppAvatarFallback>
      </AppAvatar>
      <AppAvatar className="h-8 w-8">
        <AppAvatarImage src={AVATAR_SRC} alt="shadcn" />
        <AppAvatarFallback>CN</AppAvatarFallback>
      </AppAvatar>
      <AppAvatar>
        <AppAvatarImage src={AVATAR_SRC} alt="shadcn" />
        <AppAvatarFallback>CN</AppAvatarFallback>
      </AppAvatar>
      <AppAvatar className="h-12 w-12">
        <AppAvatarImage src={AVATAR_SRC} alt="shadcn" />
        <AppAvatarFallback>CN</AppAvatarFallback>
      </AppAvatar>
      <AppAvatar className="h-16 w-16">
        <AppAvatarImage src={AVATAR_SRC} alt="shadcn" />
        <AppAvatarFallback>CN</AppAvatarFallback>
      </AppAvatar>
    </div>
  );
}

export function AvatarGroupPreview() {
  const users = [
    { src: AVATAR_SRC, fallback: "CN" },
    { src: "/broken.png", fallback: "JD" },
    { src: "/broken.png", fallback: "AB" },
    { src: "/broken.png", fallback: "KL" },
  ];

  return (
    <div className="flex -space-x-2">
      {users.map((user, i) => (
        <AppAvatar key={i} className="border-2 border-background">
          <AppAvatarImage src={user.src} alt={user.fallback} />
          <AppAvatarFallback>{user.fallback}</AppAvatarFallback>
        </AppAvatar>
      ))}
    </div>
  );
}

export function AvatarWithStatusPreview() {
  return (
    <div className="flex items-center gap-6">
      {/* Online */}
      <div className="relative">
        <AppAvatar>
          <AppAvatarImage src={AVATAR_SRC} alt="shadcn" />
          <AppAvatarFallback>CN</AppAvatarFallback>
        </AppAvatar>
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background" />
      </div>
      {/* Away */}
      <div className="relative">
        <AppAvatar>
          <AppAvatarImage src={AVATAR_SRC} alt="shadcn" />
          <AppAvatarFallback>CN</AppAvatarFallback>
        </AppAvatar>
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-background" />
      </div>
      {/* Offline */}
      <div className="relative">
        <AppAvatar>
          <AppAvatarImage src={AVATAR_SRC} alt="shadcn" />
          <AppAvatarFallback>CN</AppAvatarFallback>
        </AppAvatar>
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-muted-foreground ring-2 ring-background" />
      </div>
    </div>
  );
}

export function AvatarWithTextPreview() {
  return (
    <div className="flex items-center gap-3">
      <AppAvatar>
        <AppAvatarImage src={AVATAR_SRC} alt="shadcn" />
        <AppAvatarFallback>CN</AppAvatarFallback>
      </AppAvatar>
      <div>
        <p className="text-sm font-medium leading-none">shadcn</p>
        <p className="text-xs text-muted-foreground mt-1">m@example.com</p>
      </div>
    </div>
  );
}
