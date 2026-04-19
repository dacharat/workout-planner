// AUTO-GENERATED from data/{push,pull,legs,core}_*.csv by
// scripts/sync-exercises.mjs. Do not edit by hand.
// Run `yarn sync-exercises` after editing any source CSV.
//
// Share-link encoding uses the POSITION of each exercise in this array as a
// compact numeric index. Order is: all push rows, then pull, then legs,
// then core — row order within each file preserved. To keep existing share
// links working, APPEND new rows to the END of the appropriate CSV — never
// insert, reorder, or delete.

export type Movement = 'push' | 'pull' | 'legs' | 'core';

export type Exercise = {
  id: string;
  name: string;
  /** Primary movers — count at full weight in volume calculations. */
  musclesMain: string[];
  /** Synergists / stabilizers — count at SECONDARY_WEIGHT. */
  musclesSecondary: string[];
  equipment: string[];
  movement: Movement;
};

export const exercises: Exercise[] = [
  {
    "id": "bench_press_bb",
    "name": "Barbell Bench Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "bench_press_db",
    "name": "Dumbbell Bench Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "incline_bb_press",
    "name": "Incline Barbell Press",
    "musclesMain": [
      "upper_chest"
    ],
    "musclesSecondary": [
      "shoulders",
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "incline_db_press",
    "name": "Incline Dumbbell Press",
    "musclesMain": [
      "upper_chest"
    ],
    "musclesSecondary": [
      "shoulders",
      "triceps"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "decline_bb_press",
    "name": "Decline Barbell Press",
    "musclesMain": [
      "lower_chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "decline_db_press",
    "name": "Decline Dumbbell Press",
    "musclesMain": [
      "lower_chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "close_grip_bench",
    "name": "Close Grip Bench Press",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [
      "chest",
      "shoulders"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "reverse_grip_bench",
    "name": "Reverse Grip Barbell Press",
    "musclesMain": [
      "upper_chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "floor_press_bb",
    "name": "Barbell Floor Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "floor_press_db",
    "name": "Dumbbell Floor Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "spoto_press",
    "name": "Spoto Press (Paused Bench)",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "pin_bench_press",
    "name": "Pin Bench Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "cambered_bar_bench",
    "name": "Cambered Bar Bench Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "machine_chest_press",
    "name": "Machine Chest Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "push"
  },
  {
    "id": "incline_machine_press",
    "name": "Incline Machine Chest Press",
    "musclesMain": [
      "upper_chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "push"
  },
  {
    "id": "decline_machine_press",
    "name": "Decline Machine Chest Press",
    "musclesMain": [
      "lower_chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "push"
  },
  {
    "id": "hs_chest_press",
    "name": "Hammer Strength Chest Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "push"
  },
  {
    "id": "pec_deck_fly",
    "name": "Pec Deck Fly",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "push"
  },
  {
    "id": "chest_fly_db",
    "name": "Dumbbell Chest Fly",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "incline_fly_db",
    "name": "Incline Dumbbell Fly",
    "musclesMain": [
      "upper_chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "decline_fly_db",
    "name": "Decline Dumbbell Fly",
    "musclesMain": [
      "lower_chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "cable_fly_mid",
    "name": "Standing Cable Chest Fly (Mid Height)",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "cable_fly_high_low",
    "name": "High-to-Low Cable Fly (Lower Chest)",
    "musclesMain": [
      "lower_chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "cable_fly_low_high",
    "name": "Low-to-High Cable Fly (Upper Chest)",
    "musclesMain": [
      "upper_chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "incline_cable_fly",
    "name": "Incline Cable Fly (Bench)",
    "musclesMain": [
      "upper_chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "decline_cable_fly",
    "name": "Decline Cable Fly (Bench)",
    "musclesMain": [
      "lower_chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "single_arm_cable_fly",
    "name": "Single Arm Cable Fly",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "single_arm_db_press",
    "name": "Single Arm Dumbbell Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "core",
      "triceps"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "svend_press_plate",
    "name": "Svend Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "plate"
    ],
    "movement": "push"
  },
  {
    "id": "dips_chest",
    "name": "Chest Dips",
    "musclesMain": [
      "lower_chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "weighted_chest_dips",
    "name": "Weighted Chest Dips",
    "musclesMain": [
      "lower_chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "bodyweight",
      "other"
    ],
    "movement": "push"
  },
  {
    "id": "push_up_std",
    "name": "Standard Push-Up",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "push_up_diamond",
    "name": "Diamond Push-Up",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [
      "chest",
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "push_up_wide",
    "name": "Wide Push-Up",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "push_up_archer",
    "name": "Archer Push-Up",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps",
      "core"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "push_up_decline",
    "name": "Decline Push-Up",
    "musclesMain": [
      "upper_chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "push_up_incline",
    "name": "Incline Push-Up",
    "musclesMain": [
      "lower_chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "push_up_plus",
    "name": "Push-Up Plus",
    "musclesMain": [
      "serratus_anterior"
    ],
    "musclesSecondary": [
      "chest",
      "triceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "pike_push_up",
    "name": "Pike Push-Up",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "handstand_push_up",
    "name": "Handstand Push-Up",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "clap_push_up",
    "name": "Clap Push-Up",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps",
      "power"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "crossover_push_up",
    "name": "Crossover Push-Up",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "core",
      "triceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "pseudo_planche_pushup",
    "name": "Pseudo Planche Push-Up",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "chest",
      "triceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "ohp_bb",
    "name": "Barbell Overhead Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps",
      "core",
      "traps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "military_press_bb",
    "name": "Military Press (Strict)",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps",
      "core"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "shoulder_press_db",
    "name": "Dumbbell Shoulder Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "arnold_press_db",
    "name": "Arnold Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps",
      "traps",
      "rear_delts"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "shoulder_press_machine",
    "name": "Machine Shoulder Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "push"
  },
  {
    "id": "push_press_bb",
    "name": "Barbell Push Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "legs",
      "triceps",
      "core"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "jerk_bb",
    "name": "Barbell Jerk",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "legs",
      "triceps",
      "power"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "lateral_raise_db",
    "name": "Dumbbell Lateral Raise",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "traps"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "lateral_raise_cable",
    "name": "Cable Lateral Raise",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "traps"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "lateral_raise_machine",
    "name": "Machine Lateral Raise",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [],
    "equipment": [
      "machine"
    ],
    "movement": "push"
  },
  {
    "id": "front_raise_db",
    "name": "Dumbbell Front Raise",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "upper_chest"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "front_raise_bb",
    "name": "Barbell Front Raise",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "upper_chest"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "front_raise_plate",
    "name": "Plate Front Raise",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [],
    "equipment": [
      "plate"
    ],
    "movement": "push"
  },
  {
    "id": "y_raise_db",
    "name": "Incline Dumbbell Y-Raise",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "traps",
      "upper_back"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "upright_row_bb",
    "name": "Barbell Upright Row",
    "musclesMain": [
      "traps",
      "shoulders"
    ],
    "musclesSecondary": [
      "biceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "bus_driver_plate",
    "name": "Bus Driver",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "plate"
    ],
    "movement": "push"
  },
  {
    "id": "landmine_press_std",
    "name": "Landmine Press",
    "musclesMain": [
      "shoulders",
      "chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "javelin_press",
    "name": "Javelin Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "core",
      "stability"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "skull_crushers_ez",
    "name": "EZ-Bar Skull Crushers",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "skull_crushers_db",
    "name": "Dumbbell Skull Crushers",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "tricep_pushdown_rope",
    "name": "Cable Rope Pushdown",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "tricep_pushdown_v_bar",
    "name": "V-Bar Tricep Pushdown",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "tricep_pushdown_straight",
    "name": "Straight Bar Pushdown",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "reverse_grip_pushdown",
    "name": "Reverse Grip Cable Pushdown",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "oh_tricep_ext_db",
    "name": "Overhead Dumbbell Extension",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "oh_tricep_ext_cable",
    "name": "Overhead Cable Extension",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "tricep_kickback_db",
    "name": "Dumbbell Tricep Kickback",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "tricep_kickback_cable",
    "name": "Cable Tricep Kickback",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "bench_dips",
    "name": "Bench Dips",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [
      "chest",
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "weighted_bench_dips",
    "name": "Weighted Bench Dips",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [
      "chest",
      "shoulders"
    ],
    "equipment": [
      "bodyweight",
      "plate"
    ],
    "movement": "push"
  },
  {
    "id": "jm_press_bb",
    "name": "JM Press",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [
      "chest"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "band_push_up",
    "name": "Banded Push-Up",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "band",
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "band_chest_press",
    "name": "Banded Chest Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "band"
    ],
    "movement": "push"
  },
  {
    "id": "band_overhead_press",
    "name": "Banded Overhead Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "band"
    ],
    "movement": "push"
  },
  {
    "id": "band_lateral_raise",
    "name": "Banded Lateral Raise",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "traps"
    ],
    "equipment": [
      "band"
    ],
    "movement": "push"
  },
  {
    "id": "band_tricep_ext",
    "name": "Banded Tricep Extension",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "band"
    ],
    "movement": "push"
  },
  {
    "id": "kb_overhead_press",
    "name": "Kettlebell Overhead Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps",
      "core"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "push"
  },
  {
    "id": "kb_floor_press",
    "name": "Kettlebell Floor Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "push"
  },
  {
    "id": "kb_arnold_press",
    "name": "Kettlebell Arnold Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps",
      "rear_delts"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "push"
  },
  {
    "id": "kb_bottoms_up_press",
    "name": "Bottoms-Up KB Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "grip",
      "core"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "push"
  },
  {
    "id": "smith_bench_press",
    "name": "Smith Machine Bench Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "push"
  },
  {
    "id": "smith_shoulder_press",
    "name": "Smith Machine Shoulder Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "push"
  },
  {
    "id": "smith_incline_press",
    "name": "Smith Machine Incline Press",
    "musclesMain": [
      "upper_chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "push"
  },
  {
    "id": "machine_tricep_ext",
    "name": "Machine Tricep Extension",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "machine"
    ],
    "movement": "push"
  },
  {
    "id": "wall_slide_serratus",
    "name": "Serratus Wall Slide",
    "musclesMain": [
      "serratus_anterior"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "cable_crossover_std",
    "name": "Standing Cable Crossover",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "neutral_grip_db_press",
    "name": "Neutral Grip Dumbbell Bench Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "board_press_bb",
    "name": "Board Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "larsen_press_bb",
    "name": "Larsen Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "guillotine_press_bb",
    "name": "Guillotine Press",
    "musclesMain": [
      "upper_chest"
    ],
    "musclesSecondary": [
      "shoulders",
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "cable_chest_press_std",
    "name": "Standing Cable Chest Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "triceps",
      "shoulders"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "z_press_bb",
    "name": "Barbell Z Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "core",
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "z_press_db",
    "name": "Dumbbell Z Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "core",
      "triceps"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "bradford_press_bb",
    "name": "Bradford Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "behind_neck_press_bb",
    "name": "Behind the Neck Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "traps",
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "viking_press_landmine",
    "name": "Landmine Viking Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps",
      "core"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "half_kneeling_landmine_press",
    "name": "Half-Kneeling Landmine Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "core",
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "cable_front_raise",
    "name": "Cable Front Raise",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "upper_chest"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "cable_upright_row",
    "name": "Cable Upright Row",
    "musclesMain": [
      "traps",
      "shoulders"
    ],
    "musclesSecondary": [
      "biceps"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "tate_press_db",
    "name": "Tate Press",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [
      "chest"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "california_press_db",
    "name": "California Press",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [
      "chest",
      "shoulders"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "rolling_tricep_ext_db",
    "name": "Rolling Dumbbell Tricep Extension",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "ring_dips",
    "name": "Ring Dips",
    "musclesMain": [
      "chest",
      "triceps"
    ],
    "musclesSecondary": [
      "shoulders",
      "stability"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "push"
  },
  {
    "id": "ez_bar_shoulder_press",
    "name": "EZ-Bar Shoulder Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "reverse_grip_ohp_bb",
    "name": "Reverse Grip Barbell Shoulder Press",
    "musclesMain": [
      "shoulders",
      "upper_chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "wide_grip_bench_bb",
    "name": "Wide Grip Barbell Bench Press",
    "musclesMain": [
      "chest"
    ],
    "musclesSecondary": [
      "shoulders",
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "push"
  },
  {
    "id": "reverse_grip_bench_db",
    "name": "Reverse Grip Dumbbell Bench Press",
    "musclesMain": [
      "upper_chest"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "single_arm_shoulder_press_db",
    "name": "Single Arm Dumbbell Shoulder Press",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "triceps",
      "core"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "cable_cross_body_tricep_ext",
    "name": "Cable Cross-Body Tricep Extension",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "cable"
    ],
    "movement": "push"
  },
  {
    "id": "db_cross_body_oh_tricep_ext",
    "name": "Dumbbell Cross-Body Overhead Tricep Extension",
    "musclesMain": [
      "triceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "prone_db_shoulder_press",
    "name": "Prone Dumbbell Shoulder Press",
    "musclesMain": [
      "rear_delts",
      "upper_back"
    ],
    "musclesSecondary": [
      "traps"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "push"
  },
  {
    "id": "deadlift_conv",
    "name": "Conventional Deadlift",
    "musclesMain": [
      "glutes",
      "hamstrings"
    ],
    "musclesSecondary": [
      "lower_back",
      "traps",
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "deadlift_sumo",
    "name": "Sumo Deadlift",
    "musclesMain": [
      "glutes",
      "quads"
    ],
    "musclesSecondary": [
      "inner_thigh",
      "back"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "deadlift_trap_bar",
    "name": "Trap Bar Deadlift",
    "musclesMain": [
      "glutes",
      "quads"
    ],
    "musclesSecondary": [
      "back",
      "hamstrings"
    ],
    "equipment": [
      "other"
    ],
    "movement": "pull"
  },
  {
    "id": "rack_pull",
    "name": "Barbell Rack Pull",
    "musclesMain": [
      "upper_back",
      "traps"
    ],
    "musclesSecondary": [
      "glutes",
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "deficit_deadlift",
    "name": "Deficit Deadlift",
    "musclesMain": [
      "glutes",
      "hamstrings"
    ],
    "musclesSecondary": [
      "lower_back",
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "snatch_grip_deadlift",
    "name": "Snatch Grip Deadlift",
    "musclesMain": [
      "back",
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings",
      "traps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "bb_row_bent_over",
    "name": "Bent Over Barbell Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "rear_delts",
      "core"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "pendlay_row",
    "name": "Pendlay Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "core"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "db_row_one_arm",
    "name": "One-Arm Dumbbell Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "core"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "seated_cable_row",
    "name": "Seated Cable Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "rear_delts"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "pull"
  },
  {
    "id": "seated_row_wide",
    "name": "Wide Grip Seated Row",
    "musclesMain": [
      "upper_back",
      "traps"
    ],
    "musclesSecondary": [
      "biceps",
      "rear_delts"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "pull"
  },
  {
    "id": "lat_pulldown_wide",
    "name": "Wide Grip Lat Pulldown",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "shoulders"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "lat_pulldown_vbar",
    "name": "V-Bar Lat Pulldown",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "forearms"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "lat_pulldown_underhand",
    "name": "Underhand Lat Pulldown",
    "musclesMain": [
      "back",
      "biceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "lat_pulldown_single",
    "name": "Single Arm Lat Pulldown",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "core"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "pull"
  },
  {
    "id": "pull_up_std",
    "name": "Standard Pull-Up",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "forearms"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "pull"
  },
  {
    "id": "chin_up_std",
    "name": "Chin-Up",
    "musclesMain": [
      "biceps",
      "back"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "pull"
  },
  {
    "id": "weighted_pull_up",
    "name": "Weighted Pull-Up",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "forearms"
    ],
    "equipment": [
      "bodyweight",
      "other"
    ],
    "movement": "pull"
  },
  {
    "id": "neutral_pull_up",
    "name": "Neutral Grip Pull-Up",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "brachialis"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "pull"
  },
  {
    "id": "archer_pull_up",
    "name": "Archer Pull-Up",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "core"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "pull"
  },
  {
    "id": "t_bar_row",
    "name": "T-Bar Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "traps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "kroc_row",
    "name": "Kroc Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "forearms",
      "traps"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "meadows_row",
    "name": "Meadows Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "rear_delts"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "seal_row",
    "name": "Seal Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "rear_delts",
      "biceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "inverted_row",
    "name": "Inverted Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "core"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "pull"
  },
  {
    "id": "face_pull_rope",
    "name": "Cable Face Pull",
    "musclesMain": [
      "rear_deltoids"
    ],
    "musclesSecondary": [
      "traps",
      "upper_back"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "pull"
  },
  {
    "id": "straight_arm_pulldown",
    "name": "Straight Arm Pulldown",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "triceps",
      "core"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "pull"
  },
  {
    "id": "pullover_db",
    "name": "Dumbbell Pullover",
    "musclesMain": [
      "chest",
      "back"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "pullover_bb",
    "name": "Barbell Pullover",
    "musclesMain": [
      "chest",
      "back"
    ],
    "musclesSecondary": [
      "triceps"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "rear_delt_fly_db",
    "name": "Dumbbell Rear Delt Fly",
    "musclesMain": [
      "rear_deltoids"
    ],
    "musclesSecondary": [
      "upper_back"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "rear_delt_fly_machine",
    "name": "Reverse Pec Deck Fly",
    "musclesMain": [
      "rear_deltoids"
    ],
    "musclesSecondary": [
      "traps"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "shrug_bb",
    "name": "Barbell Shrug",
    "musclesMain": [
      "traps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "shrug_db",
    "name": "Dumbbell Shrug",
    "musclesMain": [
      "traps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "shrug_behind_back",
    "name": "Behind Back Shrug",
    "musclesMain": [
      "traps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "kelso_shrug",
    "name": "Kelso Shrug",
    "musclesMain": [
      "mid_traps",
      "rhomboids"
    ],
    "musclesSecondary": [
      "rear_delts"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "shrug_smith",
    "name": "Smith Machine Shrug",
    "musclesMain": [
      "traps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "bicep_curl_bb",
    "name": "Barbell Bicep Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "bicep_curl_db",
    "name": "Dumbbell Bicep Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "hammer_curl_db",
    "name": "Dumbbell Hammer Curl",
    "musclesMain": [
      "biceps",
      "forearms"
    ],
    "musclesSecondary": [
      "brachialis"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "cross_body_hammer_curl",
    "name": "Cross Body Hammer Curl",
    "musclesMain": [
      "brachialis",
      "biceps"
    ],
    "musclesSecondary": [
      "forearms",
      "shoulders"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "preacher_curl_ez",
    "name": "EZ-Bar Preacher Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "preacher_curl_db",
    "name": "Dumbbell Preacher Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "concentration_curl",
    "name": "Concentration Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "spider_curl_db",
    "name": "Spider Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "incline_db_curl",
    "name": "Incline Dumbbell Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "zottman_curl",
    "name": "Zottman Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "zottman_hammer_curl",
    "name": "Zottman Hammer Curl",
    "musclesMain": [
      "biceps",
      "forearms"
    ],
    "musclesSecondary": [],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "reverse_curl_bb",
    "name": "Barbell Reverse Curl",
    "musclesMain": [
      "forearms",
      "biceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "bayesian_curl",
    "name": "Bayesian Cable Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "cable"
    ],
    "movement": "pull"
  },
  {
    "id": "cable_bicep_curl",
    "name": "Cable Bicep Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "cable"
    ],
    "movement": "pull"
  },
  {
    "id": "ez_bar_curl",
    "name": "EZ Bar Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "wrist_curl_bb",
    "name": "Barbell Wrist Curl",
    "musclesMain": [
      "forearms"
    ],
    "musclesSecondary": [],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "wrist_extension_db",
    "name": "Dumbbell Wrist Extension",
    "musclesMain": [
      "forearms"
    ],
    "musclesSecondary": [],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "plate_pinch_hold",
    "name": "Plate Pinch",
    "musclesMain": [
      "forearms"
    ],
    "musclesSecondary": [
      "grip"
    ],
    "equipment": [
      "plate"
    ],
    "movement": "pull"
  },
  {
    "id": "farmers_walk_db",
    "name": "Farmer's Walk",
    "musclesMain": [
      "forearms"
    ],
    "musclesSecondary": [
      "traps",
      "core",
      "glutes"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "fat_bar_deadlift",
    "name": "Fat Bar Deadlift",
    "musclesMain": [
      "glutes",
      "forearms"
    ],
    "musclesSecondary": [
      "hamstrings",
      "back"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "kb_swing_std",
    "name": "Kettlebell Swing",
    "musclesMain": [
      "glutes",
      "hamstrings"
    ],
    "musclesSecondary": [
      "lower_back",
      "core",
      "shoulders"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "pull"
  },
  {
    "id": "kb_snatch_std",
    "name": "Kettlebell Snatch",
    "musclesMain": [
      "full_body"
    ],
    "musclesSecondary": [
      "shoulders",
      "back",
      "legs"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "pull"
  },
  {
    "id": "kb_clean_std",
    "name": "Kettlebell Clean",
    "musclesMain": [
      "full_body"
    ],
    "musclesSecondary": [
      "legs",
      "back",
      "forearms"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "pull"
  },
  {
    "id": "kb_row_one_arm",
    "name": "One-Arm Kettlebell Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "core"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "pull"
  },
  {
    "id": "band_pull_apart",
    "name": "Resistance Band Pull Apart",
    "musclesMain": [
      "rear_delts",
      "upper_back"
    ],
    "musclesSecondary": [],
    "equipment": [
      "band"
    ],
    "movement": "pull"
  },
  {
    "id": "band_face_pull",
    "name": "Banded Face Pull",
    "musclesMain": [
      "rear_delts"
    ],
    "musclesSecondary": [
      "traps"
    ],
    "equipment": [
      "band"
    ],
    "movement": "pull"
  },
  {
    "id": "band_bicep_curl",
    "name": "Banded Bicep Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [],
    "equipment": [
      "band"
    ],
    "movement": "pull"
  },
  {
    "id": "band_seated_row",
    "name": "Seated Banded Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps"
    ],
    "equipment": [
      "band"
    ],
    "movement": "pull"
  },
  {
    "id": "muscle_up_bar",
    "name": "Bar Muscle-Up",
    "musclesMain": [
      "back",
      "chest",
      "triceps"
    ],
    "musclesSecondary": [
      "shoulders",
      "core"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "pull"
  },
  {
    "id": "renegade_row_db",
    "name": "Renegade Row",
    "musclesMain": [
      "back",
      "core"
    ],
    "musclesSecondary": [
      "shoulders",
      "biceps"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "high_pull_bb",
    "name": "Barbell High Pull",
    "musclesMain": [
      "traps",
      "shoulders"
    ],
    "musclesSecondary": [
      "legs",
      "lower_back"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "scap_pull_up",
    "name": "Scapular Pull-Up",
    "musclesMain": [
      "traps",
      "back"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "pull"
  },
  {
    "id": "dead_hang",
    "name": "Dead Hang",
    "musclesMain": [
      "forearms"
    ],
    "musclesSecondary": [
      "back",
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "pull"
  },
  {
    "id": "atlas_stones",
    "name": "Atlas Stones",
    "musclesMain": [
      "back",
      "glutes"
    ],
    "musclesSecondary": [
      "forearms",
      "lower_back"
    ],
    "equipment": [
      "other"
    ],
    "movement": "pull"
  },
  {
    "id": "tire_flip",
    "name": "Tire Flip",
    "musclesMain": [
      "glutes",
      "back"
    ],
    "musclesSecondary": [
      "legs",
      "shoulders"
    ],
    "equipment": [
      "other"
    ],
    "movement": "pull"
  },
  {
    "id": "rope_climb",
    "name": "Rope Climb",
    "musclesMain": [
      "back",
      "biceps"
    ],
    "musclesSecondary": [
      "core",
      "legs",
      "forearms"
    ],
    "equipment": [
      "other"
    ],
    "movement": "pull"
  },
  {
    "id": "chest_supported_row_machine",
    "name": "Chest Supported Machine Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "rear_delts"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "chest_supported_row_db",
    "name": "Chest Supported Dumbbell Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "rear_delts"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "yates_row_bb",
    "name": "Yates Row (Underhand Bent Over)",
    "musclesMain": [
      "back",
      "biceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "hs_high_row",
    "name": "Hammer Strength High Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "rear_delts"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "hs_low_row",
    "name": "Hammer Strength Low Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "landmine_row_single",
    "name": "Single Arm Landmine Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "core"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "smith_row",
    "name": "Smith Machine Bent Over Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "neutral_grip_pulldown",
    "name": "Neutral Grip Lat Pulldown",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "brachialis"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "close_grip_pulldown",
    "name": "Close Grip Lat Pulldown",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "commando_pull_up",
    "name": "Commando Pull-Up",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "core"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "pull"
  },
  {
    "id": "drag_curl_bb",
    "name": "Drag Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "waiter_curl_db",
    "name": "Waiter Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "plate_curl_std",
    "name": "Plate Curl",
    "musclesMain": [
      "biceps",
      "forearms"
    ],
    "musclesSecondary": [],
    "equipment": [
      "plate"
    ],
    "movement": "pull"
  },
  {
    "id": "rope_hammer_curl_cable",
    "name": "Cable Rope Hammer Curl",
    "musclesMain": [
      "biceps",
      "forearms"
    ],
    "musclesSecondary": [
      "brachialis"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "pull"
  },
  {
    "id": "seated_db_curl",
    "name": "Seated Dumbbell Curl",
    "musclesMain": [
      "biceps"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "cable_reverse_fly",
    "name": "Cable Reverse Fly",
    "musclesMain": [
      "rear_delts"
    ],
    "musclesSecondary": [
      "upper_back"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "pull"
  },
  {
    "id": "prone_y_raise",
    "name": "Prone Y Raise",
    "musclesMain": [
      "rear_delts",
      "traps"
    ],
    "musclesSecondary": [
      "upper_back"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "reverse_wrist_curl_bb",
    "name": "Reverse Barbell Wrist Curl",
    "musclesMain": [
      "forearms"
    ],
    "musclesSecondary": [],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "zercher_deadlift_bb",
    "name": "Barbell Zercher Deadlift",
    "musclesMain": [
      "glutes",
      "quads"
    ],
    "musclesSecondary": [
      "upper_back",
      "core"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "deadlift_db",
    "name": "Dumbbell Deadlift",
    "musclesMain": [
      "glutes",
      "hamstrings"
    ],
    "musclesSecondary": [
      "lower_back",
      "forearms"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "suitcase_deadlift_bb",
    "name": "Barbell Suitcase Deadlift",
    "musclesMain": [
      "glutes",
      "obliques"
    ],
    "musclesSecondary": [
      "core",
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "pull"
  },
  {
    "id": "smith_deadlift",
    "name": "Smith Machine Deadlift",
    "musclesMain": [
      "glutes",
      "hamstrings"
    ],
    "musclesSecondary": [
      "lower_back"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "machine_plate_row",
    "name": "Machine Plate-Loaded Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "rear_delts"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "pull"
  },
  {
    "id": "v_bar_seated_row_cable",
    "name": "V-Bar Seated Cable Row",
    "musclesMain": [
      "back"
    ],
    "musclesSecondary": [
      "biceps",
      "forearms"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "pull"
  },
  {
    "id": "db_rotational_row",
    "name": "Dumbbell Rotational Row",
    "musclesMain": [
      "back",
      "obliques"
    ],
    "musclesSecondary": [
      "biceps",
      "core"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "prone_w_raise",
    "name": "Prone W Raise",
    "musclesMain": [
      "rear_delts",
      "traps"
    ],
    "musclesSecondary": [
      "upper_back"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "prone_t_raise",
    "name": "Prone T Raise",
    "musclesMain": [
      "rear_delts",
      "mid_traps"
    ],
    "musclesSecondary": [
      "upper_back"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "pull"
  },
  {
    "id": "back_squat_bb",
    "name": "Barbell Back Squat",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings",
      "lower_back",
      "core"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "front_squat_bb",
    "name": "Barbell Front Squat",
    "musclesMain": [
      "quads"
    ],
    "musclesSecondary": [
      "upper_back",
      "core"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "zercher_squat_bb",
    "name": "Zercher Squat",
    "musclesMain": [
      "quads",
      "core"
    ],
    "musclesSecondary": [
      "upper_back",
      "glutes"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "goblet_squat_db",
    "name": "Goblet Squat",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "box_squat_bb",
    "name": "Barbell Box Squat",
    "musclesMain": [
      "glutes",
      "hamstrings"
    ],
    "musclesSecondary": [
      "quads",
      "lower_back"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "hack_squat_machine",
    "name": "Machine Hack Squat",
    "musclesMain": [
      "quads"
    ],
    "musclesSecondary": [
      "glutes"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "leg_press_std",
    "name": "Standard Leg Press",
    "musclesMain": [
      "quads"
    ],
    "musclesSecondary": [
      "glutes",
      "hamstrings"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "leg_extension_machine",
    "name": "Leg Extension",
    "musclesMain": [
      "quads"
    ],
    "musclesSecondary": [],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "rdl_bb",
    "name": "Barbell Romanian Deadlift",
    "musclesMain": [
      "hamstrings",
      "glutes"
    ],
    "musclesSecondary": [
      "lower_back",
      "forearms"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "rdl_db",
    "name": "Dumbbell Romanian Deadlift",
    "musclesMain": [
      "hamstrings",
      "glutes"
    ],
    "musclesSecondary": [
      "lower_back",
      "forearms"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "stiff_leg_dl_bb",
    "name": "Stiff Leg Deadlift",
    "musclesMain": [
      "hamstrings"
    ],
    "musclesSecondary": [
      "lower_back"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "lying_leg_curl_machine",
    "name": "Lying Leg Curl",
    "musclesMain": [
      "hamstrings"
    ],
    "musclesSecondary": [],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "seated_leg_curl_machine",
    "name": "Seated Leg Curl",
    "musclesMain": [
      "hamstrings"
    ],
    "musclesSecondary": [],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "standing_leg_curl",
    "name": "Standing Leg Curl",
    "musclesMain": [
      "hamstrings"
    ],
    "musclesSecondary": [],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "hip_thrust_bb",
    "name": "Barbell Hip Thrust",
    "musclesMain": [
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "hip_thrust_machine",
    "name": "Hip Thrust Machine",
    "musclesMain": [
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "glute_bridge_std",
    "name": "Bodyweight Glute Bridge",
    "musclesMain": [
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "bulgarian_split_squat",
    "name": "Bulgarian Split Squat",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings",
      "core"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "lunge_walking_db",
    "name": "Walking Dumbbell Lunge",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "reverse_lunge_db",
    "name": "Reverse Dumbbell Lunge",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "side_lunge_std",
    "name": "Bodyweight Side Lunge",
    "musclesMain": [
      "quads",
      "adductors"
    ],
    "musclesSecondary": [
      "glutes"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "curtsy_lunge_db",
    "name": "Dumbbell Curtsy Lunge",
    "musclesMain": [
      "glutes",
      "quads"
    ],
    "musclesSecondary": [
      "adductors"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "step_up_weighted",
    "name": "Weighted Step-Up",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "pistol_squat_std",
    "name": "Pistol Squat",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "sissy_squat_std",
    "name": "Sissy Squat",
    "musclesMain": [
      "quads"
    ],
    "musclesSecondary": [],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "nordic_curl_std",
    "name": "Nordic Hamstring Curl",
    "musclesMain": [
      "hamstrings"
    ],
    "musclesSecondary": [
      "glutes"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "good_morning_bb",
    "name": "Barbell Good Morning",
    "musclesMain": [
      "hamstrings",
      "lower_back"
    ],
    "musclesSecondary": [
      "glutes"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "standing_calf_raise_machine",
    "name": "Standing Calf Raise",
    "musclesMain": [
      "calves"
    ],
    "musclesSecondary": [],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "seated_calf_raise_machine",
    "name": "Seated Calf Raise",
    "musclesMain": [
      "calves"
    ],
    "musclesSecondary": [],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "donkey_calf_raise",
    "name": "Donkey Calf Raise",
    "musclesMain": [
      "calves"
    ],
    "musclesSecondary": [],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "leg_press_calf_raise",
    "name": "Calf Raise on Leg Press",
    "musclesMain": [
      "calves"
    ],
    "musclesSecondary": [],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "tibialis_raise_std",
    "name": "Tibialis Raise",
    "musclesMain": [
      "tibialis_anterior"
    ],
    "musclesSecondary": [],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "hip_abduction_machine",
    "name": "Hip Abduction Machine",
    "musclesMain": [
      "glute_medius"
    ],
    "musclesSecondary": [
      "hips"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "hip_adduction_machine",
    "name": "Hip Adduction Machine",
    "musclesMain": [
      "adductors"
    ],
    "musclesSecondary": [
      "inner_thigh"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "sumo_squat_db",
    "name": "Sumo Squat",
    "musclesMain": [
      "glutes",
      "inner_thigh"
    ],
    "musclesSecondary": [
      "quads"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "cable_glute_kickback",
    "name": "Cable Glute Kickback",
    "musclesMain": [
      "glutes"
    ],
    "musclesSecondary": [],
    "equipment": [
      "cable"
    ],
    "movement": "legs"
  },
  {
    "id": "cable_pull_through",
    "name": "Cable Pull-Through",
    "musclesMain": [
      "glutes",
      "hamstrings"
    ],
    "musclesSecondary": [
      "lower_back"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "legs"
  },
  {
    "id": "reverse_hyperextension",
    "name": "Reverse Hyperextension",
    "musclesMain": [
      "glutes",
      "lower_back"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "box_jump_std",
    "name": "Box Jump",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "calves"
    ],
    "equipment": [
      "other"
    ],
    "movement": "legs"
  },
  {
    "id": "single_leg_press",
    "name": "Single-Leg Leg Press",
    "musclesMain": [
      "quads"
    ],
    "musclesSecondary": [
      "glutes"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "shrimp_squat",
    "name": "Shrimp Squat",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "wall_sit_std",
    "name": "Wall Sit",
    "musclesMain": [
      "quads"
    ],
    "musclesSecondary": [
      "glutes"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "cyclist_squat",
    "name": "Cyclist Squat (Heels Elevated)",
    "musclesMain": [
      "quads"
    ],
    "musclesSecondary": [],
    "equipment": [
      "dumbbell",
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "jefferson_deadlift",
    "name": "Jefferson Deadlift",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "back",
      "core"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "band_lateral_walk",
    "name": "Lateral Band Walk",
    "musclesMain": [
      "glute_medius"
    ],
    "musclesSecondary": [
      "hips"
    ],
    "equipment": [
      "band"
    ],
    "movement": "legs"
  },
  {
    "id": "band_clamshell",
    "name": "Banded Clamshell",
    "musclesMain": [
      "glute_medius"
    ],
    "musclesSecondary": [],
    "equipment": [
      "band"
    ],
    "movement": "legs"
  },
  {
    "id": "band_glute_bridge",
    "name": "Banded Glute Bridge",
    "musclesMain": [
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "band"
    ],
    "movement": "legs"
  },
  {
    "id": "kb_goblet_squat",
    "name": "Kettlebell Goblet Squat",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "legs"
  },
  {
    "id": "kb_single_leg_deadlift",
    "name": "Kettlebell Single-Leg Deadlift",
    "musclesMain": [
      "hamstrings",
      "glutes"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "legs"
  },
  {
    "id": "smith_squat",
    "name": "Smith Machine Squat",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "belt_squat",
    "name": "Belt Squat",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "ssb_squat",
    "name": "Safety Squat Bar Squat",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "upper_back",
      "core"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "pause_back_squat",
    "name": "Pause Back Squat",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "core",
      "lower_back"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "anderson_squat",
    "name": "Anderson Squat (Pin Squat)",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "split_squat_db",
    "name": "Dumbbell Split Squat",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings",
      "core"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "cossack_squat_db",
    "name": "Cossack Squat",
    "musclesMain": [
      "adductors",
      "quads"
    ],
    "musclesSecondary": [
      "glutes",
      "hamstrings"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "ghr_std",
    "name": "Glute Ham Raise",
    "musclesMain": [
      "hamstrings",
      "glutes"
    ],
    "musclesSecondary": [
      "lower_back",
      "calves"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "single_leg_rdl_db",
    "name": "Single Leg Romanian Deadlift",
    "musclesMain": [
      "hamstrings",
      "glutes"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "back_ext_45",
    "name": "45 Degree Back Extension",
    "musclesMain": [
      "lower_back",
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "jefferson_curl_db",
    "name": "Jefferson Curl",
    "musclesMain": [
      "hamstrings",
      "lower_back"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "single_leg_hip_thrust",
    "name": "Single Leg Hip Thrust",
    "musclesMain": [
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings",
      "core"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "b_stance_hip_thrust_bb",
    "name": "B-Stance Hip Thrust",
    "musclesMain": [
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "frog_pump",
    "name": "Frog Pump",
    "musclesMain": [
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "kas_glute_bridge_bb",
    "name": "Kas Glute Bridge",
    "musclesMain": [
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "sled_push",
    "name": "Sled Push / Prowler",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "calves",
      "cardio"
    ],
    "equipment": [
      "other"
    ],
    "movement": "legs"
  },
  {
    "id": "deficit_reverse_lunge_db",
    "name": "Deficit Reverse Lunge",
    "musclesMain": [
      "quads",
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "single_leg_calf_raise_db",
    "name": "Single Leg Dumbbell Calf Raise",
    "musclesMain": [
      "calves"
    ],
    "musclesSecondary": [
      "stability"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "legs"
  },
  {
    "id": "machine_glute_kickback",
    "name": "Machine Glute Kickback",
    "musclesMain": [
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "single_leg_glute_bridge",
    "name": "Single Leg Glute Bridge (Floor)",
    "musclesMain": [
      "glutes"
    ],
    "musclesSecondary": [
      "hamstrings",
      "core"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "bw_standing_ham_curl",
    "name": "Bodyweight Standing Hamstring Curl",
    "musclesMain": [
      "hamstrings"
    ],
    "musclesSecondary": [
      "glutes"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "legs"
  },
  {
    "id": "smith_rdl",
    "name": "Smith Machine Romanian Deadlift",
    "musclesMain": [
      "hamstrings",
      "glutes"
    ],
    "musclesSecondary": [
      "lower_back"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "legs"
  },
  {
    "id": "landmine_staggered_rdl",
    "name": "Landmine Staggered Stance RDL",
    "musclesMain": [
      "hamstrings",
      "glutes"
    ],
    "musclesSecondary": [
      "core",
      "lower_back"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "legs"
  },
  {
    "id": "plank_std",
    "name": "Standard Plank",
    "musclesMain": [
      "abs",
      "core"
    ],
    "musclesSecondary": [
      "shoulders",
      "glutes"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "side_plank_std",
    "name": "Side Plank",
    "musclesMain": [
      "obliques"
    ],
    "musclesSecondary": [
      "core",
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "weighted_sit_up",
    "name": "Weighted Sit-Up",
    "musclesMain": [
      "abs"
    ],
    "musclesSecondary": [
      "core",
      "hip_flexors"
    ],
    "equipment": [
      "dumbbell",
      "plate"
    ],
    "movement": "core"
  },
  {
    "id": "cable_crunch_kneeling",
    "name": "Kneeling Cable Crunch",
    "musclesMain": [
      "abs"
    ],
    "musclesSecondary": [
      "hip_flexors"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "core"
  },
  {
    "id": "hanging_leg_raise",
    "name": "Hanging Leg Raise",
    "musclesMain": [
      "abs"
    ],
    "musclesSecondary": [
      "hip_flexors",
      "grip"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "hanging_knee_raise",
    "name": "Hanging Knee Raise",
    "musclesMain": [
      "lower_abs"
    ],
    "musclesSecondary": [
      "grip"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "russian_twist_db",
    "name": "Weighted Russian Twist",
    "musclesMain": [
      "obliques"
    ],
    "musclesSecondary": [
      "abs"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "core"
  },
  {
    "id": "cable_woodchopper_high_low",
    "name": "Cable Woodchopper (High to Low)",
    "musclesMain": [
      "obliques"
    ],
    "musclesSecondary": [
      "abs",
      "shoulders"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "core"
  },
  {
    "id": "cable_woodchopper_low_high",
    "name": "Cable Woodchopper (Low to High)",
    "musclesMain": [
      "obliques"
    ],
    "musclesSecondary": [
      "abs",
      "shoulders"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "core"
  },
  {
    "id": "ab_wheel_rollout",
    "name": "Ab Wheel Rollout",
    "musclesMain": [
      "abs"
    ],
    "musclesSecondary": [
      "core",
      "lats"
    ],
    "equipment": [
      "other"
    ],
    "movement": "core"
  },
  {
    "id": "hollow_hold",
    "name": "Hollow Body Hold",
    "musclesMain": [
      "abs",
      "core"
    ],
    "musclesSecondary": [],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "dead_bug_std",
    "name": "Dead Bug",
    "musclesMain": [
      "abs",
      "core"
    ],
    "musclesSecondary": [],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "bird_dog_std",
    "name": "Bird Dog",
    "musclesMain": [
      "core",
      "lower_back"
    ],
    "musclesSecondary": [
      "glutes"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "dragon_flag_std",
    "name": "Dragon Flag",
    "musclesMain": [
      "abs",
      "core"
    ],
    "musclesSecondary": [
      "core",
      "lats"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "l_sit_std",
    "name": "L-Sit",
    "musclesMain": [
      "abs",
      "core"
    ],
    "musclesSecondary": [
      "shoulders",
      "hip_flexors"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "pallof_press_cable",
    "name": "Cable Pallof Press",
    "musclesMain": [
      "core",
      "obliques"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "core"
  },
  {
    "id": "superman_hold",
    "name": "Superman Hold",
    "musclesMain": [
      "lower_back"
    ],
    "musclesSecondary": [
      "glutes"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "v_up_std",
    "name": "V-Ups",
    "musclesMain": [
      "abs"
    ],
    "musclesSecondary": [
      "hip_flexors"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "bicycle_crunch_std",
    "name": "Bicycle Crunches",
    "musclesMain": [
      "abs",
      "obliques"
    ],
    "musclesSecondary": [],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "mountain_climber",
    "name": "Mountain Climbers",
    "musclesMain": [
      "core"
    ],
    "musclesSecondary": [
      "cardio",
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "windshield_wiper",
    "name": "Windshield Wipers",
    "musclesMain": [
      "obliques"
    ],
    "musclesSecondary": [
      "abs",
      "core"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "flutter_kicks",
    "name": "Flutter Kicks",
    "musclesMain": [
      "lower_abs"
    ],
    "musclesSecondary": [
      "hip_flexors"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "reverse_crunch",
    "name": "Reverse Crunch",
    "musclesMain": [
      "lower_abs"
    ],
    "musclesSecondary": [],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "plank_shoulder_tap",
    "name": "Plank Shoulder Taps",
    "musclesMain": [
      "core"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "landmine_twist",
    "name": "Landmine Twist",
    "musclesMain": [
      "obliques"
    ],
    "musclesSecondary": [
      "core",
      "shoulders"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "core"
  },
  {
    "id": "kb_windmill_std",
    "name": "Kettlebell Windmill",
    "musclesMain": [
      "obliques"
    ],
    "musclesSecondary": [
      "shoulders",
      "hamstrings"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "core"
  },
  {
    "id": "kb_turkish_get_up",
    "name": "Turkish Get-Up",
    "musclesMain": [
      "full_body"
    ],
    "musclesSecondary": [
      "shoulders",
      "core",
      "stability"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "core"
  },
  {
    "id": "kb_halo_std",
    "name": "Kettlebell Halo",
    "musclesMain": [
      "shoulders"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "core"
  },
  {
    "id": "bear_crawl_std",
    "name": "Bear Crawl",
    "musclesMain": [
      "core"
    ],
    "musclesSecondary": [
      "shoulders",
      "quads"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "alligator_drag",
    "name": "Alligator Drag",
    "musclesMain": [
      "core"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "other"
    ],
    "movement": "core"
  },
  {
    "id": "hard_roll_std",
    "name": "Hard Roll",
    "musclesMain": [
      "core"
    ],
    "musclesSecondary": [
      "coordination"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "plank_drag_kb",
    "name": "Kettlebell Plank Drag",
    "musclesMain": [
      "core",
      "obliques"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "core"
  },
  {
    "id": "band_pallof_press",
    "name": "Banded Pallof Press",
    "musclesMain": [
      "core",
      "obliques"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "band"
    ],
    "movement": "core"
  },
  {
    "id": "hollow_body_rock",
    "name": "Hollow Body Rock",
    "musclesMain": [
      "abs",
      "core"
    ],
    "musclesSecondary": [],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "toes_to_bar",
    "name": "Toes To Bar",
    "musclesMain": [
      "abs",
      "core"
    ],
    "musclesSecondary": [
      "grip",
      "lat"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "knee_to_elbow",
    "name": "Knee To Elbow",
    "musclesMain": [
      "abs",
      "obliques"
    ],
    "musclesSecondary": [],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "copenhagen_plank",
    "name": "Copenhagen Plank",
    "musclesMain": [
      "obliques",
      "adductors"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "bodyweight",
      "other"
    ],
    "movement": "core"
  },
  {
    "id": "suitcase_carry_db",
    "name": "Suitcase Carry",
    "musclesMain": [
      "obliques",
      "core"
    ],
    "musclesSecondary": [
      "forearms"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "core"
  },
  {
    "id": "overhead_carry_db",
    "name": "Overhead DB Carry",
    "musclesMain": [
      "shoulders",
      "core"
    ],
    "musclesSecondary": [],
    "equipment": [
      "dumbbell"
    ],
    "movement": "core"
  },
  {
    "id": "captain_chair_leg_raise",
    "name": "Captain's Chair Leg Raise",
    "musclesMain": [
      "abs"
    ],
    "musclesSecondary": [
      "hip_flexors"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "core"
  },
  {
    "id": "decline_sit_up_weighted",
    "name": "Weighted Decline Sit-Up",
    "musclesMain": [
      "abs"
    ],
    "musclesSecondary": [
      "hip_flexors"
    ],
    "equipment": [
      "plate",
      "dumbbell"
    ],
    "movement": "core"
  },
  {
    "id": "cable_side_bend",
    "name": "Cable Side Bend",
    "musclesMain": [
      "obliques"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "core"
  },
  {
    "id": "oblique_v_up",
    "name": "Oblique V-Up",
    "musclesMain": [
      "obliques"
    ],
    "musclesSecondary": [
      "abs"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "lying_leg_raise",
    "name": "Lying Leg Raise",
    "musclesMain": [
      "lower_abs"
    ],
    "musclesSecondary": [
      "hip_flexors"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "scissor_kicks",
    "name": "Scissor Kicks",
    "musclesMain": [
      "lower_abs"
    ],
    "musclesSecondary": [
      "hip_flexors",
      "core"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "jackknife_std",
    "name": "Jackknife",
    "musclesMain": [
      "abs"
    ],
    "musclesSecondary": [
      "hip_flexors"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "body_saw_plank",
    "name": "Body Saw Plank",
    "musclesMain": [
      "abs",
      "core"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "stir_the_pot_sb",
    "name": "Stir the Pot (Stability Ball)",
    "musclesMain": [
      "core",
      "abs"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "other"
    ],
    "movement": "core"
  },
  {
    "id": "sb_pike",
    "name": "Stability Ball Pike",
    "musclesMain": [
      "abs",
      "core"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "other"
    ],
    "movement": "core"
  },
  {
    "id": "sb_rollout",
    "name": "Stability Ball Rollout",
    "musclesMain": [
      "abs",
      "core"
    ],
    "musclesSecondary": [
      "lats",
      "shoulders"
    ],
    "equipment": [
      "other"
    ],
    "movement": "core"
  },
  {
    "id": "plank_to_push_up",
    "name": "Plank to Push-Up",
    "musclesMain": [
      "core",
      "abs"
    ],
    "musclesSecondary": [
      "shoulders",
      "triceps"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "reverse_plank_std",
    "name": "Reverse Plank",
    "musclesMain": [
      "core",
      "glutes"
    ],
    "musclesSecondary": [
      "shoulders",
      "hamstrings"
    ],
    "equipment": [
      "bodyweight"
    ],
    "movement": "core"
  },
  {
    "id": "standing_cable_crunch",
    "name": "Standing Cable Crunch",
    "musclesMain": [
      "abs"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "core"
  },
  {
    "id": "med_ball_slam",
    "name": "Medicine Ball Slam",
    "musclesMain": [
      "abs",
      "core"
    ],
    "musclesSecondary": [
      "shoulders",
      "lats"
    ],
    "equipment": [
      "other"
    ],
    "movement": "core"
  },
  {
    "id": "med_ball_rotational_throw",
    "name": "Medicine Ball Rotational Throw",
    "musclesMain": [
      "obliques",
      "core"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "other"
    ],
    "movement": "core"
  },
  {
    "id": "weighted_plank",
    "name": "Weighted Plank",
    "musclesMain": [
      "abs",
      "core"
    ],
    "musclesSecondary": [
      "shoulders"
    ],
    "equipment": [
      "bodyweight",
      "plate"
    ],
    "movement": "core"
  },
  {
    "id": "bb_ab_rollout",
    "name": "Barbell Ab Rollout",
    "musclesMain": [
      "abs"
    ],
    "musclesSecondary": [
      "core",
      "lats"
    ],
    "equipment": [
      "barbell"
    ],
    "movement": "core"
  },
  {
    "id": "ab_coaster_machine",
    "name": "Ab Coaster Machine",
    "musclesMain": [
      "abs"
    ],
    "musclesSecondary": [
      "obliques"
    ],
    "equipment": [
      "machine"
    ],
    "movement": "core"
  },
  {
    "id": "cable_std_russian_twist",
    "name": "Cable Standing Russian Twist",
    "musclesMain": [
      "obliques"
    ],
    "musclesSecondary": [
      "abs",
      "core"
    ],
    "equipment": [
      "cable"
    ],
    "movement": "core"
  },
  {
    "id": "kb_side_bend",
    "name": "Kettlebell Side Bend",
    "musclesMain": [
      "obliques"
    ],
    "musclesSecondary": [
      "core"
    ],
    "equipment": [
      "kettlebell"
    ],
    "movement": "core"
  },
  {
    "id": "db_v_sit",
    "name": "Dumbbell V-Sit",
    "musclesMain": [
      "abs"
    ],
    "musclesSecondary": [
      "hip_flexors"
    ],
    "equipment": [
      "dumbbell"
    ],
    "movement": "core"
  }
];

export const exerciseById: Record<string, Exercise> = Object.fromEntries(
  exercises.map((e) => [e.id, e]),
);

export const exerciseIds: string[] = exercises.map((e) => e.id);

export const exerciseIdToIndex: Record<string, number> = Object.fromEntries(
  exercises.map((e, i) => [e.id, i]),
);
