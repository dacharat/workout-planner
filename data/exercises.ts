export type Movement = 'push' | 'pull' | 'legs' | 'core' | 'full_body';

export type Exercise = {
  id: string;
  name: string;
  muscles: string[];
  equipment: string[];
  movement: Movement;
};

export const exercises: Exercise[] = [
  {
    "id": "bench_press_barbell",
    "name": "Barbell Bench Press",
    "muscles": ['chest', 'triceps', 'shoulders'],
    "equipment": ['barbell'],
    "movement": "push"
  },
  {
    "id": "bench_press_db",
    "name": "Dumbbell Bench Press",
    "muscles": ['chest', 'triceps', 'shoulders'],
    "equipment": ['dumbbell'],
    "movement": "push"
  },
  {
    "id": "incline_press_barbell",
    "name": "Incline Barbell Press",
    "muscles": ['upper_chest', 'shoulders', 'triceps'],
    "equipment": ['barbell'],
    "movement": "push"
  },
  {
    "id": "incline_press_db",
    "name": "Incline Dumbbell Press",
    "muscles": ['upper_chest', 'shoulders', 'triceps'],
    "equipment": ['dumbbell'],
    "movement": "push"
  },
  {
    "id": "decline_press_barbell",
    "name": "Decline Barbell Press",
    "muscles": ['lower_chest', 'triceps'],
    "equipment": ['barbell'],
    "movement": "push"
  },
  {
    "id": "floor_press_db",
    "name": "Dumbbell Floor Press",
    "muscles": ['chest', 'triceps'],
    "equipment": ['dumbbell'],
    "movement": "push"
  },
  {
    "id": "machine_chest_press",
    "name": "Machine Chest Press",
    "muscles": ['chest', 'triceps'],
    "equipment": ['machine'],
    "movement": "push"
  },
  {
    "id": "chest_fly_db",
    "name": "Dumbbell Chest Fly",
    "muscles": ['chest'],
    "equipment": ['dumbbell'],
    "movement": "push"
  },
  {
    "id": "chest_fly_cable",
    "name": "Cable Chest Fly",
    "muscles": ['chest'],
    "equipment": ['cable'],
    "movement": "push"
  },
  {
    "id": "pec_deck_machine",
    "name": "Pec Deck",
    "muscles": ['chest'],
    "equipment": ['machine'],
    "movement": "push"
  },
  {
    "id": "push_up_std",
    "name": "Standard Push-Up",
    "muscles": ['chest', 'triceps', 'shoulders'],
    "equipment": ['bodyweight'],
    "movement": "push"
  },
  {
    "id": "push_up_kneeling",
    "name": "Kneeling Push-Up",
    "muscles": ['chest', 'triceps'],
    "equipment": ['bodyweight'],
    "movement": "push"
  },
  {
    "id": "push_up_diamond",
    "name": "Diamond Push-Up",
    "muscles": ['triceps', 'chest'],
    "equipment": ['bodyweight'],
    "movement": "push"
  },
  {
    "id": "dips_chest",
    "name": "Chest Dips",
    "muscles": ['chest', 'triceps', 'shoulders'],
    "equipment": ['bodyweight'],
    "movement": "push"
  },
  {
    "id": "ohp_barbell",
    "name": "Barbell Overhead Press",
    "muscles": ['shoulders', 'triceps', 'core'],
    "equipment": ['barbell'],
    "movement": "push"
  },
  {
    "id": "seated_press_db",
    "name": "Seated Dumbbell Press",
    "muscles": ['shoulders', 'triceps'],
    "equipment": ['dumbbell'],
    "movement": "push"
  },
  {
    "id": "arnold_press_db",
    "name": "Arnold Press",
    "muscles": ['shoulders', 'triceps'],
    "equipment": ['dumbbell'],
    "movement": "push"
  },
  {
    "id": "lat_raise_db",
    "name": "Lateral Raise",
    "muscles": ['shoulders'],
    "equipment": ['dumbbell'],
    "movement": "push"
  },
  {
    "id": "front_raise_db",
    "name": "Front Raise",
    "muscles": ['shoulders'],
    "equipment": ['dumbbell'],
    "movement": "push"
  },
  {
    "id": "rear_delt_fly_db",
    "name": "Rear Delt Fly",
    "muscles": ['shoulders', 'upper_back'],
    "equipment": ['dumbbell'],
    "movement": "pull"
  },
  {
    "id": "upright_row_barbell",
    "name": "Barbell Upright Row",
    "muscles": ['shoulders', 'traps'],
    "equipment": ['barbell'],
    "movement": "pull"
  },
  {
    "id": "face_pull_cable",
    "name": "Face Pull",
    "muscles": ['rear_deltoids', 'traps'],
    "equipment": ['cable'],
    "movement": "pull"
  },
  {
    "id": "shrugs_db",
    "name": "Dumbbell Shrugs",
    "muscles": ['traps'],
    "equipment": ['dumbbell'],
    "movement": "pull"
  },
  {
    "id": "deadlift_conv",
    "name": "Conventional Deadlift",
    "muscles": ['glutes', 'hamstrings', 'back', 'forearms'],
    "equipment": ['barbell'],
    "movement": "pull"
  },
  {
    "id": "deadlift_sumo",
    "name": "Sumo Deadlift",
    "muscles": ['glutes', 'inner_thigh', 'back'],
    "equipment": ['barbell'],
    "movement": "pull"
  },
  {
    "id": "rack_pull",
    "name": "Rack Pull",
    "muscles": ['upper_back', 'traps', 'forearms'],
    "equipment": ['barbell'],
    "movement": "pull"
  },
  {
    "id": "barbell_row",
    "name": "Barbell Row",
    "muscles": ['back', 'biceps', 'forearms'],
    "equipment": ['barbell'],
    "movement": "pull"
  },
  {
    "id": "db_row_one_arm",
    "name": "One-Arm Dumbbell Row",
    "muscles": ['back', 'biceps'],
    "equipment": ['dumbbell'],
    "movement": "pull"
  },
  {
    "id": "lat_pulldown",
    "name": "Lat Pulldown",
    "muscles": ['back', 'biceps'],
    "equipment": ['machine'],
    "movement": "pull"
  },
  {
    "id": "pull_up",
    "name": "Pull-Up",
    "muscles": ['back', 'biceps', 'forearms'],
    "equipment": ['bodyweight'],
    "movement": "pull"
  },
  {
    "id": "chin_up",
    "name": "Chin-Up",
    "muscles": ['back', 'biceps', 'forearms'],
    "equipment": ['bodyweight'],
    "movement": "pull"
  },
  {
    "id": "seated_row_cable",
    "name": "Seated Cable Row",
    "muscles": ['back', 'biceps'],
    "equipment": ['cable'],
    "movement": "pull"
  },
  {
    "id": "t_bar_row",
    "name": "T-Bar Row",
    "muscles": ['back', 'biceps'],
    "equipment": ['barbell'],
    "movement": "pull"
  },
  {
    "id": "kroc_row",
    "name": "Kroc Row",
    "muscles": ['back', 'biceps', 'forearms'],
    "equipment": ['dumbbell'],
    "movement": "pull"
  },
  {
    "id": "bicep_curl_barbell",
    "name": "Barbell Curl",
    "muscles": ['biceps'],
    "equipment": ['barbell'],
    "movement": "pull"
  },
  {
    "id": "bicep_curl_db",
    "name": "Dumbbell Curl",
    "muscles": ['biceps'],
    "equipment": ['dumbbell'],
    "movement": "pull"
  },
  {
    "id": "hammer_curl_db",
    "name": "Hammer Curl",
    "muscles": ['biceps', 'forearms'],
    "equipment": ['dumbbell'],
    "movement": "pull"
  },
  {
    "id": "preacher_curl_ez",
    "name": "Preacher Curl",
    "muscles": ['biceps'],
    "equipment": ['barbell'],
    "movement": "pull"
  },
  {
    "id": "concentration_curl",
    "name": "Concentration Curl",
    "muscles": ['biceps'],
    "equipment": ['dumbbell'],
    "movement": "pull"
  },
  {
    "id": "reverse_curl_barbell",
    "name": "Reverse Barbell Curl",
    "muscles": ['forearms', 'biceps'],
    "equipment": ['barbell'],
    "movement": "pull"
  },
  {
    "id": "skull_crushers_ez",
    "name": "Skull Crushers",
    "muscles": ['triceps'],
    "equipment": ['barbell'],
    "movement": "push"
  },
  {
    "id": "tricep_pushdown_cable",
    "name": "Tricep Pushdown",
    "muscles": ['triceps'],
    "equipment": ['cable'],
    "movement": "push"
  },
  {
    "id": "oh_tricep_ext_db",
    "name": "Overhead Tricep Extension",
    "muscles": ['triceps'],
    "equipment": ['dumbbell'],
    "movement": "push"
  },
  {
    "id": "dips_tricep",
    "name": "Tricep Dips",
    "muscles": ['triceps', 'shoulders'],
    "equipment": ['bodyweight'],
    "movement": "push"
  },
  {
    "id": "squat_back_barbell",
    "name": "Barbell Back Squat",
    "muscles": ['quads', 'glutes', 'lower_back'],
    "equipment": ['barbell'],
    "movement": "legs"
  },
  {
    "id": "squat_front_barbell",
    "name": "Barbell Front Squat",
    "muscles": ['quads', 'upper_back', 'core'],
    "equipment": ['barbell'],
    "movement": "legs"
  },
  {
    "id": "goblet_squat_kb",
    "name": "Goblet Squat",
    "muscles": ['quads', 'glutes', 'core'],
    "equipment": ['kettlebell'],
    "movement": "legs"
  },
  {
    "id": "leg_press",
    "name": "Leg Press",
    "muscles": ['quads', 'glutes', 'hamstrings'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "rdl_barbell",
    "name": "Romanian Deadlift",
    "muscles": ['hamstrings', 'glutes', 'lower_back'],
    "equipment": ['barbell'],
    "movement": "legs"
  },
  {
    "id": "leg_extension",
    "name": "Leg Extension",
    "muscles": ['quads'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "leg_curl_lying",
    "name": "Lying Leg Curl",
    "muscles": ['hamstrings'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "calf_raise_standing",
    "name": "Standing Calf Raise",
    "muscles": ['calves'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "calf_raise_seated",
    "name": "Seated Calf Raise",
    "muscles": ['calves'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "hip_thrust_barbell",
    "name": "Barbell Hip Thrust",
    "muscles": ['glutes', 'hamstrings'],
    "equipment": ['barbell'],
    "movement": "legs"
  },
  {
    "id": "lunge_db",
    "name": "Dumbbell Lunge",
    "muscles": ['quads', 'glutes', 'hamstrings'],
    "equipment": ['dumbbell'],
    "movement": "legs"
  },
  {
    "id": "split_squat_bulgarian",
    "name": "Bulgarian Split Squat",
    "muscles": ['quads', 'glutes'],
    "equipment": ['dumbbell'],
    "movement": "legs"
  },
  {
    "id": "step_up_db",
    "name": "Step Up",
    "muscles": ['quads', 'glutes'],
    "equipment": ['dumbbell'],
    "movement": "legs"
  },
  {
    "id": "plank_standard",
    "name": "Plank",
    "muscles": ['abs', 'core'],
    "equipment": ['bodyweight'],
    "movement": "core"
  },
  {
    "id": "cable_crunch",
    "name": "Cable Crunch",
    "muscles": ['abs'],
    "equipment": ['cable'],
    "movement": "core"
  },
  {
    "id": "leg_raise_hanging",
    "name": "Hanging Leg Raise",
    "muscles": ['abs', 'hip_flexors'],
    "equipment": ['bodyweight'],
    "movement": "core"
  },
  {
    "id": "russian_twist",
    "name": "Russian Twist",
    "muscles": ['obliques', 'abs'],
    "equipment": ['dumbbell'],
    "movement": "core"
  },
  {
    "id": "wood_chop_cable",
    "name": "Cable Wood Chop",
    "muscles": ['obliques', 'abs'],
    "equipment": ['cable'],
    "movement": "core"
  },
  {
    "id": "farmers_walk",
    "name": "Farmers Walk",
    "muscles": ['forearms', 'traps', 'core'],
    "equipment": ['dumbbell'],
    "movement": "pull"
  },
  {
    "id": "kb_swing",
    "name": "Kettlebell Swing",
    "muscles": ['glutes', 'hamstrings', 'back'],
    "equipment": ['kettlebell'],
    "movement": "pull"
  },
  {
    "id": "turkish_get_up",
    "name": "Turkish Get-Up",
    "muscles": ['full_body', 'shoulders', 'core'],
    "equipment": ['kettlebell'],
    "movement": "full_body"
  },
  {
    "id": "zercher_squat",
    "name": "Zercher Squat",
    "muscles": ['quads', 'core', 'upper_back'],
    "equipment": ['barbell'],
    "movement": "legs"
  },
  {
    "id": "good_morning_barbell",
    "name": "Good Morning",
    "muscles": ['hamstrings', 'glutes', 'lower_back'],
    "equipment": ['barbell'],
    "movement": "legs"
  },
  {
    "id": "nordics_hamstring",
    "name": "Nordic Hamstring Curl",
    "muscles": ['hamstrings'],
    "equipment": ['bodyweight'],
    "movement": "legs"
  },
  {
    "id": "jefferson_deadlift",
    "name": "Jefferson Deadlift",
    "muscles": ['legs', 'core', 'back'],
    "equipment": ['barbell'],
    "movement": "pull"
  },
  {
    "id": "sissy_squat",
    "name": "Sissy Squat",
    "muscles": ['quads'],
    "equipment": ['bodyweight'],
    "movement": "legs"
  },
  {
    "id": "hack_squat",
    "name": "Hack Squat",
    "muscles": ['quads', 'glutes'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "sldl_db",
    "name": "Single-Leg Deadlift",
    "muscles": ['hamstrings', 'glutes', 'core'],
    "equipment": ['dumbbell'],
    "movement": "legs"
  },
  {
    "id": "pistol_squat",
    "name": "Pistol Squat",
    "muscles": ['quads', 'glutes', 'core'],
    "equipment": ['bodyweight'],
    "movement": "legs"
  },
  {
    "id": "face_pull_rope",
    "name": "Rope Face Pull",
    "muscles": ['rear_delts', 'upper_back'],
    "equipment": ['cable'],
    "movement": "pull"
  },
  {
    "id": "pec_deck_fly",
    "name": "Pec Deck Fly",
    "muscles": ['chest'],
    "equipment": ['machine'],
    "movement": "push"
  },
  {
    "id": "hammer_strength_press",
    "name": "Hammer Strength Press",
    "muscles": ['chest', 'triceps'],
    "equipment": ['machine'],
    "movement": "push"
  },
  {
    "id": "smith_machine_squat",
    "name": "Smith Machine Squat",
    "muscles": ['quads', 'glutes'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "smith_machine_shrug",
    "name": "Smith Machine Shrug",
    "muscles": ['traps'],
    "equipment": ['machine'],
    "movement": "pull"
  },
  {
    "id": "close_grip_bench",
    "name": "Close Grip Bench Press",
    "muscles": ['triceps', 'chest'],
    "equipment": ['barbell'],
    "movement": "push"
  },
  {
    "id": "wide_grip_pull_up",
    "name": "Wide Grip Pull-Up",
    "muscles": ['lats', 'back'],
    "equipment": ['bodyweight'],
    "movement": "pull"
  },
  {
    "id": "reverse_grip_lat_pd",
    "name": "Reverse Grip Lat Pulldown",
    "muscles": ['lats', 'biceps'],
    "equipment": ['machine'],
    "movement": "pull"
  },
  {
    "id": "spider_curl_db",
    "name": "Spider Curl",
    "muscles": ['biceps'],
    "equipment": ['dumbbell'],
    "movement": "pull"
  },
  {
    "id": "preacher_curl_db",
    "name": "Preacher Curl (DB)",
    "muscles": ['biceps'],
    "equipment": ['dumbbell'],
    "movement": "pull"
  },
  {
    "id": "zottman_curl",
    "name": "Zottman Curl",
    "muscles": ['biceps', 'forearms'],
    "equipment": ['dumbbell'],
    "movement": "pull"
  },
  {
    "id": "t_bar_row_wide",
    "name": "T-Bar Row (Wide)",
    "muscles": ['back', 'traps'],
    "equipment": ['machine'],
    "movement": "pull"
  },
  {
    "id": "rack_pull_high",
    "name": "High Rack Pull",
    "muscles": ['traps', 'upper_back'],
    "equipment": ['barbell'],
    "movement": "pull"
  },
  {
    "id": "barbell_shrug_back",
    "name": "Behind Back Shrug",
    "muscles": ['traps'],
    "equipment": ['barbell'],
    "movement": "pull"
  },
  {
    "id": "db_shrug_seated",
    "name": "Seated DB Shrug",
    "muscles": ['traps'],
    "equipment": ['dumbbell'],
    "movement": "pull"
  },
  {
    "id": "plate_pinch",
    "name": "Plate Pinch",
    "muscles": ['forearms', 'grip'],
    "equipment": ['plate'],
    "movement": "pull"
  },
  {
    "id": "wrist_roller",
    "name": "Wrist Roller",
    "muscles": ['forearms'],
    "equipment": ['other'],
    "movement": "pull"
  },
  {
    "id": "goblet_lunge",
    "name": "Goblet Lunge",
    "muscles": ['quads', 'glutes'],
    "equipment": ['kettlebell'],
    "movement": "legs"
  },
  {
    "id": "single_leg_leg_press",
    "name": "Single-Leg Leg Press",
    "muscles": ['quads', 'glutes'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "reverse_nordic",
    "name": "Reverse Nordic",
    "muscles": ['quads'],
    "equipment": ['bodyweight'],
    "movement": "legs"
  },
  {
    "id": "donkey_calf_raise",
    "name": "Donkey Calf Raise",
    "muscles": ['calves'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "leg_press_calf_raise",
    "name": "Calf Raise on Leg Press",
    "muscles": ['calves'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "glute_kickback_cable",
    "name": "Cable Glute Kickback",
    "muscles": ['glutes'],
    "equipment": ['cable'],
    "movement": "legs"
  },
  {
    "id": "glute_kickback_machine",
    "name": "Machine Glute Kickback",
    "muscles": ['glutes'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "hip_abduction_machine",
    "name": "Hip Abduction",
    "muscles": ['glute_medius', 'hips'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "hip_adduction_machine",
    "name": "Hip Adduction",
    "muscles": ['adductors', 'inner_thigh'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "cable_pull_through",
    "name": "Cable Pull-Through",
    "muscles": ['glutes', 'hamstrings'],
    "equipment": ['cable'],
    "movement": "legs"
  },
  {
    "id": "reverse_hyperextension",
    "name": "Reverse Hyperextension",
    "muscles": ['glutes', 'lower_back'],
    "equipment": ['machine'],
    "movement": "legs"
  },
  {
    "id": "band_good_morning",
    "name": "Banded Good Morning",
    "muscles": ['hamstrings', 'glutes'],
    "equipment": ['band'],
    "movement": "legs"
  },
  {
    "id": "band_lateral_walk",
    "name": "Band Lateral Walk",
    "muscles": ['glute_medius'],
    "equipment": ['band'],
    "movement": "legs"
  },
  {
    "id": "pallof_press_band",
    "name": "Banded Pallof Press",
    "muscles": ['core', 'obliques'],
    "equipment": ['band'],
    "movement": "core"
  },
  {
    "id": "band_wood_chop",
    "name": "Banded Wood Chop",
    "muscles": ['obliques', 'core'],
    "equipment": ['band'],
    "movement": "core"
  },
  {
    "id": "mountain_climbers",
    "name": "Mountain Climbers",
    "muscles": ['core', 'cardio'],
    "equipment": ['bodyweight'],
    "movement": "core"
  },
  {
    "id": "bicycle_crunches",
    "name": "Bicycle Crunches",
    "muscles": ['abs', 'obliques'],
    "equipment": ['bodyweight'],
    "movement": "core"
  },
  {
    "id": "hanging_knee_tuck",
    "name": "Hanging Knee Tuck",
    "muscles": ['lower_abs'],
    "equipment": ['bodyweight'],
    "movement": "core"
  },
  {
    "id": "toes_to_bar",
    "name": "Toes To Bar",
    "muscles": ['abs', 'core', 'grip'],
    "equipment": ['bodyweight'],
    "movement": "core"
  },
  {
    "id": "dragon_flag",
    "name": "Dragon Flag",
    "muscles": ['abs', 'core'],
    "equipment": ['bodyweight'],
    "movement": "core"
  },
  {
    "id": "hollow_body_rock",
    "name": "Hollow Body Rock",
    "muscles": ['abs', 'core'],
    "equipment": ['bodyweight'],
    "movement": "core"
  },
  {
    "id": "bird_dog_hold",
    "name": "Bird Dog",
    "muscles": ['core', 'lower_back'],
    "equipment": ['bodyweight'],
    "movement": "core"
  },
  {
    "id": "superman_hold",
    "name": "Superman",
    "muscles": ['lower_back', 'glutes'],
    "equipment": ['bodyweight'],
    "movement": "core"
  },
  {
    "id": "l_sit_hold",
    "name": "L-Sit",
    "muscles": ['abs', 'core', 'shoulders'],
    "equipment": ['bodyweight'],
    "movement": "core"
  },
  {
    "id": "handstand_push_up",
    "name": "Handstand Push-Up",
    "muscles": ['shoulders', 'triceps'],
    "equipment": ['bodyweight'],
    "movement": "push"
  },
  {
    "id": "pike_push_up",
    "name": "Pike Push-Up",
    "muscles": ['shoulders', 'triceps'],
    "equipment": ['bodyweight'],
    "movement": "push"
  },
  {
    "id": "dips_bench",
    "name": "Bench Dips",
    "muscles": ['triceps', 'shoulders'],
    "equipment": ['bodyweight'],
    "movement": "push"
  },
  {
    "id": "clap_push_up",
    "name": "Clap Push-Up",
    "muscles": ['chest', 'triceps', 'power'],
    "equipment": ['bodyweight'],
    "movement": "push"
  },
  {
    "id": "burpee_std",
    "name": "Standard Burpee",
    "muscles": ['full_body', 'cardio'],
    "equipment": ['bodyweight'],
    "movement": "full_body"
  },
  {
    "id": "star_jump",
    "name": "Star Jump",
    "muscles": ['full_body', 'cardio'],
    "equipment": ['bodyweight'],
    "movement": "full_body"
  },
  {
    "id": "bear_crawl",
    "name": "Bear Crawl",
    "muscles": ['core', 'shoulders', 'quads'],
    "equipment": ['bodyweight'],
    "movement": "full_body"
  },
  {
    "id": "alligator_drag",
    "name": "Alligator Drag",
    "muscles": ['core', 'shoulders'],
    "equipment": ['other'],
    "movement": "core"
  },
  {
    "id": "hard_roll",
    "name": "Hard Roll",
    "muscles": ['core', 'coordination'],
    "equipment": ['bodyweight'],
    "movement": "core"
  },
  {
    "id": "bottoms_up_kb_press",
    "name": "Bottoms-Up KB Press",
    "muscles": ['shoulders', 'grip', 'core'],
    "equipment": ['kettlebell'],
    "movement": "push"
  },
  {
    "id": "suitcase_deadlift",
    "name": "Suitcase Deadlift",
    "muscles": ['core', 'obliques', 'glutes'],
    "equipment": ['dumbbell', 'kettlebell'],
    "movement": "pull"
  },
  {
    "id": "waiter_carry",
    "name": "Waiter Carry",
    "muscles": ['shoulders', 'core'],
    "equipment": ['dumbbell', 'kettlebell'],
    "movement": "push"
  },
  {
    "id": "overhead_carry",
    "name": "Overhead Carry",
    "muscles": ['shoulders', 'core'],
    "equipment": ['barbell', 'dumbbell'],
    "movement": "push"
  },
  {
    "id": "javelin_press",
    "name": "Javelin Press",
    "muscles": ['shoulders', 'core', 'stability'],
    "equipment": ['barbell'],
    "movement": "push"
  },
  {
    "id": "landmine_twist",
    "name": "Landmine Twist",
    "muscles": ['obliques', 'core'],
    "equipment": ['barbell'],
    "movement": "core"
  },
  {
    "id": "atlas_stones",
    "name": "Atlas Stones",
    "muscles": ['back', 'glutes', 'power'],
    "equipment": ['other'],
    "movement": "pull"
  },
  {
    "id": "rickshaw_carry",
    "name": "Rickshaw Carry",
    "muscles": ['forearms', 'traps', 'legs'],
    "equipment": ['other'],
    "movement": "full_body"
  },
  {
    "id": "sldl_kb",
    "name": "KB Single-Leg Deadlift",
    "muscles": ['hamstrings', 'glutes', 'core'],
    "equipment": ['kettlebell'],
    "movement": "legs"
  },
  {
    "id": "kb_windmill",
    "name": "Kettlebell Windmill",
    "muscles": ['obliques', 'shoulders'],
    "equipment": ['kettlebell'],
    "movement": "core"
  },
  {
    "id": "kb_halo_seated",
    "name": "Seated KB Halo",
    "muscles": ['shoulders', 'core'],
    "equipment": ['kettlebell'],
    "movement": "push"
  },
  {
    "id": "band_clams",
    "name": "Banded Clamshells",
    "muscles": ['glute_medius'],
    "equipment": ['band'],
    "movement": "legs"
  },
  {
    "id": "band_glute_bridge",
    "name": "Banded Glute Bridge",
    "muscles": ['glutes'],
    "equipment": ['band'],
    "movement": "legs"
  },
  {
    "id": "band_seated_row",
    "name": "Seated Band Row",
    "muscles": ['back', 'biceps'],
    "equipment": ['band'],
    "movement": "pull"
  },
  {
    "id": "band_lat_pulldown",
    "name": "Banded Lat Pulldown",
    "muscles": ['back', 'biceps'],
    "equipment": ['band'],
    "movement": "pull"
  },
  {
    "id": "band_chest_fly",
    "name": "Banded Chest Fly",
    "muscles": ['chest'],
    "equipment": ['band'],
    "movement": "push"
  },
  {
    "id": "band_bicep_curl",
    "name": "Banded Bicep Curl",
    "muscles": ['biceps'],
    "equipment": ['band'],
    "movement": "pull"
  },
  {
    "id": "band_tricep_ext",
    "name": "Banded Tricep Extension",
    "muscles": ['triceps'],
    "equipment": ['band'],
    "movement": "push"
  },
  {
    "id": "band_overhead_press",
    "name": "Banded Overhead Press",
    "muscles": ['shoulders', 'triceps'],
    "equipment": ['band'],
    "movement": "push"
  }
];

export const exerciseById: Record<string, Exercise> = Object.fromEntries(
  exercises.map((e) => [e.id, e]),
);

/**
 * Share-link encoding uses the position of each exercise in this array as a
 * compact numeric index. To keep old share links working:
 *   - APPEND new entries to the bottom of `exercises` only.
 *   - Do not remove or reorder existing entries.
 */
export const exerciseIds: string[] = exercises.map((e) => e.id);

export const exerciseIdToIndex: Record<string, number> = Object.fromEntries(
  exercises.map((e, i) => [e.id, i]),
);
