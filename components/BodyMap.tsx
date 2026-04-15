'use client';

import { formatMuscleLabel, getStatus } from '@/lib/volume';

type Props = { volume: Record<string, number> };

const fillFor = (sets: number): string => {
  if (!sets) return 'fill-neutral-200 dark:fill-neutral-800';
  const s = getStatus(sets);
  if (s === 'low') return 'fill-amber-400';
  if (s === 'optimal') return 'fill-emerald-500';
  return 'fill-rose-500';
};

const BASE_BODY = 'fill-neutral-100 dark:fill-neutral-900';
const BODY_STROKE = 'stroke-neutral-400 dark:stroke-neutral-600';

type MusclePathProps = {
  muscle: string;
  volume: Record<string, number>;
  d: string;
};

function MusclePath({ muscle, volume, d }: MusclePathProps) {
  const sets = volume[muscle] ?? 0;
  return (
    <path d={d} className={`${fillFor(sets)} transition-colors`}>
      <title>{`${formatMuscleLabel(muscle)}: ${sets} sets`}</title>
    </path>
  );
}

function BaseBody() {
  return (
    <g
      className={`${BASE_BODY} ${BODY_STROKE}`}
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      {/* Head */}
      <ellipse cx="100" cy="34" rx="19" ry="24" />
      {/* Neck */}
      <path d="M88,56 L90,66 L110,66 L112,56 Z" />
      {/* Torso */}
      <path d="M62,70 C52,80 46,100 44,125 L42,165 C42,190 48,205 58,210 L64,195 L70,250 L100,262 L130,250 L136,195 L142,210 C152,205 158,190 158,165 L156,125 C154,100 148,80 138,70 C128,62 112,60 100,60 C88,60 72,62 62,70 Z" />
      {/* Left arm */}
      <path d="M62,70 C48,78 38,98 34,125 L28,175 L26,220 L30,252 C32,262 42,262 46,254 L52,220 L58,175 L62,125 L66,92 Z" />
      {/* Right arm */}
      <path d="M138,70 C152,78 162,98 166,125 L172,175 L174,220 L170,252 C168,262 158,262 154,254 L148,220 L142,175 L138,125 L134,92 Z" />
      {/* Left leg */}
      <path d="M70,250 C62,280 58,320 62,360 L66,420 L78,428 L90,422 L94,380 L96,330 L98,282 L100,262 Z" />
      {/* Right leg */}
      <path d="M130,250 C138,280 142,320 138,360 L134,420 L122,428 L110,422 L106,380 L104,330 L102,282 L100,262 Z" />
    </g>
  );
}

export function BodyMap({ volume }: Props) {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <figure className="flex flex-col items-center gap-1">
          <svg
            viewBox="0 0 200 440"
            className="h-64 w-full"
            aria-label="Front body view"
          >
            <BaseBody />
            <g strokeWidth="0">
              {/* Front delts */}
              <MusclePath
                muscle="shoulders"
                volume={volume}
                d="M56,74 C46,82 40,98 40,116 C48,108 58,103 70,100 C72,90 66,78 58,72 Z"
              />
              <MusclePath
                muscle="shoulders"
                volume={volume}
                d="M144,74 C154,82 160,98 160,116 C152,108 142,103 130,100 C128,90 134,78 142,72 Z"
              />
              {/* Upper chest (clavicular) */}
              <MusclePath
                muscle="upper_chest"
                volume={volume}
                d="M68,82 C82,76 118,76 132,82 L128,96 L72,96 Z"
              />
              {/* Chest (pectorals) */}
              <MusclePath
                muscle="chest"
                volume={volume}
                d="M72,96 C68,118 76,136 98,140 L98,100 L72,96 Z"
              />
              <MusclePath
                muscle="chest"
                volume={volume}
                d="M128,96 C132,118 124,136 102,140 L102,100 L128,96 Z"
              />
              {/* Biceps */}
              <MusclePath
                muscle="biceps"
                volume={volume}
                d="M36,118 C30,138 30,158 38,178 C42,180 48,180 52,178 C52,158 52,138 54,118 C48,114 42,114 36,118 Z"
              />
              <MusclePath
                muscle="biceps"
                volume={volume}
                d="M164,118 C170,138 170,158 162,178 C158,180 152,180 148,178 C148,158 148,138 146,118 C152,114 158,114 164,118 Z"
              />
              {/* Forearms */}
              <MusclePath
                muscle="forearms"
                volume={volume}
                d="M28,190 C26,215 28,240 34,254 C38,256 44,256 46,254 C46,232 48,204 46,188 C40,186 32,186 28,190 Z"
              />
              <MusclePath
                muscle="forearms"
                volume={volume}
                d="M172,190 C174,215 172,240 166,254 C162,256 156,256 154,254 C154,232 152,204 154,188 C160,186 168,186 172,190 Z"
              />
              {/* Abs / core — segmented */}
              <MusclePath
                muscle="core"
                volume={volume}
                d="M80,142 L120,142 C122,160 122,180 122,200 L120,230 L110,252 L100,258 L90,252 L80,230 L78,200 C78,180 78,160 80,142 Z"
              />
              {/* Quads */}
              <MusclePath
                muscle="quads"
                volume={volume}
                d="M72,268 C66,300 64,338 70,378 C76,382 84,382 90,378 C92,338 94,300 96,268 C88,264 80,264 72,268 Z"
              />
              <MusclePath
                muscle="quads"
                volume={volume}
                d="M128,268 C134,300 136,338 130,378 C124,382 116,382 110,378 C108,338 106,300 104,268 C112,264 120,264 128,268 Z"
              />
            </g>
          </svg>
          <figcaption className="text-[10px] font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Front
          </figcaption>
        </figure>

        <figure className="flex flex-col items-center gap-1">
          <svg
            viewBox="0 0 200 440"
            className="h-64 w-full"
            aria-label="Back body view"
          >
            <BaseBody />
            <g strokeWidth="0">
              {/* Traps / upper back */}
              <MusclePath
                muscle="upper_back"
                volume={volume}
                d="M72,68 C84,62 116,62 128,68 L136,96 C120,92 80,92 64,96 Z"
              />
              {/* Rear delts */}
              <MusclePath
                muscle="rear_delts"
                volume={volume}
                d="M56,74 C46,82 40,98 40,116 C48,108 58,103 68,100 C70,90 64,78 58,72 Z"
              />
              <MusclePath
                muscle="rear_delts"
                volume={volume}
                d="M144,74 C154,82 160,98 160,116 C152,108 142,103 132,100 C130,90 136,78 142,72 Z"
              />
              {/* Back (lats) */}
              <MusclePath
                muscle="back"
                volume={volume}
                d="M66,98 C80,96 120,96 134,98 L130,140 L124,180 L114,206 L100,212 L86,206 L76,180 L70,140 Z"
              />
              {/* Triceps */}
              <MusclePath
                muscle="triceps"
                volume={volume}
                d="M36,118 C30,138 30,158 38,178 C42,180 48,180 52,178 C52,158 52,138 54,118 C48,114 42,114 36,118 Z"
              />
              <MusclePath
                muscle="triceps"
                volume={volume}
                d="M164,118 C170,138 170,158 162,178 C158,180 152,180 148,178 C148,158 148,138 146,118 C152,114 158,114 164,118 Z"
              />
              {/* Forearms */}
              <MusclePath
                muscle="forearms"
                volume={volume}
                d="M28,190 C26,215 28,240 34,254 C38,256 44,256 46,254 C46,232 48,204 46,188 C40,186 32,186 28,190 Z"
              />
              <MusclePath
                muscle="forearms"
                volume={volume}
                d="M172,190 C174,215 172,240 166,254 C162,256 156,256 154,254 C154,232 152,204 154,188 C160,186 168,186 172,190 Z"
              />
              {/* Glutes */}
              <MusclePath
                muscle="glutes"
                volume={volume}
                d="M72,216 C64,232 64,256 74,266 C82,270 92,270 98,268 L98,216 C88,212 80,212 72,216 Z"
              />
              <MusclePath
                muscle="glutes"
                volume={volume}
                d="M128,216 C136,232 136,256 126,266 C118,270 108,270 102,268 L102,216 C112,212 120,212 128,216 Z"
              />
              {/* Hamstrings */}
              <MusclePath
                muscle="hamstrings"
                volume={volume}
                d="M72,270 C66,306 64,340 72,368 C80,372 88,372 92,368 C94,340 96,306 98,270 C88,266 80,266 72,270 Z"
              />
              <MusclePath
                muscle="hamstrings"
                volume={volume}
                d="M128,270 C134,306 136,340 128,368 C120,372 112,372 108,368 C106,340 104,306 102,270 C112,266 120,266 128,270 Z"
              />
              {/* Calves */}
              <MusclePath
                muscle="calves"
                volume={volume}
                d="M74,374 C70,394 72,412 80,424 C86,426 92,422 94,418 C94,400 94,382 94,372 C88,370 80,370 74,374 Z"
              />
              <MusclePath
                muscle="calves"
                volume={volume}
                d="M126,374 C130,394 128,412 120,424 C114,426 108,422 106,418 C106,400 106,382 106,372 C112,370 120,370 126,374 Z"
              />
            </g>
          </svg>
          <figcaption className="text-[10px] font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Back
          </figcaption>
        </figure>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] text-neutral-500 dark:text-neutral-400">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" /> None
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-amber-400" /> Low
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Optimal
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-rose-500" /> High
        </span>
      </div>
    </div>
  );
}
