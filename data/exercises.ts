export type Movement = 'push' | 'pull' | 'legs' | 'core';

export type Exercise = {
  id: string;
  name: string;
  muscles: string[];
  equipment: string[];
  movement: Movement;
};

export const exercises: Exercise[] = [
  { id: 'bench_press', name: 'Bench Press', muscles: ['chest', 'triceps', 'shoulders'], equipment: ['barbell'], movement: 'push' },
  { id: 'incline_bench_press', name: 'Incline Bench Press', muscles: ['upper_chest', 'triceps'], equipment: ['barbell'], movement: 'push' },
  { id: 'dumbbell_press', name: 'Dumbbell Bench Press', muscles: ['chest', 'triceps'], equipment: ['dumbbell'], movement: 'push' },
  { id: 'push_up', name: 'Push Up', muscles: ['chest', 'triceps', 'shoulders'], equipment: ['bodyweight'], movement: 'push' },
  { id: 'incline_push_up', name: 'Incline Push Up', muscles: ['chest'], equipment: ['bodyweight'], movement: 'push' },
  { id: 'decline_push_up', name: 'Decline Push Up', muscles: ['upper_chest'], equipment: ['bodyweight'], movement: 'push' },
  { id: 'chest_fly', name: 'Dumbbell Fly', muscles: ['chest'], equipment: ['dumbbell'], movement: 'push' },
  { id: 'cable_fly', name: 'Cable Fly', muscles: ['chest'], equipment: ['cable'], movement: 'push' },

  { id: 'pull_up', name: 'Pull Up', muscles: ['back', 'biceps'], equipment: ['bodyweight'], movement: 'pull' },
  { id: 'chin_up', name: 'Chin Up', muscles: ['back', 'biceps'], equipment: ['bodyweight'], movement: 'pull' },
  { id: 'lat_pulldown', name: 'Lat Pulldown', muscles: ['back'], equipment: ['machine'], movement: 'pull' },
  { id: 'barbell_row', name: 'Barbell Row', muscles: ['back', 'biceps'], equipment: ['barbell'], movement: 'pull' },
  { id: 'dumbbell_row', name: 'Dumbbell Row', muscles: ['back'], equipment: ['dumbbell'], movement: 'pull' },
  { id: 'seated_row', name: 'Seated Cable Row', muscles: ['back'], equipment: ['cable'], movement: 'pull' },
  { id: 'face_pull', name: 'Face Pull', muscles: ['rear_delts', 'upper_back'], equipment: ['cable'], movement: 'pull' },

  { id: 'shoulder_press', name: 'Shoulder Press', muscles: ['shoulders', 'triceps'], equipment: ['dumbbell'], movement: 'push' },
  { id: 'overhead_press', name: 'Overhead Press', muscles: ['shoulders', 'triceps'], equipment: ['barbell'], movement: 'push' },
  { id: 'lateral_raise', name: 'Lateral Raise', muscles: ['shoulders'], equipment: ['dumbbell'], movement: 'push' },
  { id: 'front_raise', name: 'Front Raise', muscles: ['shoulders'], equipment: ['dumbbell'], movement: 'push' },
  { id: 'rear_delt_fly', name: 'Rear Delt Fly', muscles: ['rear_delts'], equipment: ['dumbbell'], movement: 'pull' },

  { id: 'bicep_curl', name: 'Bicep Curl', muscles: ['biceps'], equipment: ['dumbbell'], movement: 'pull' },
  { id: 'hammer_curl', name: 'Hammer Curl', muscles: ['biceps', 'forearms'], equipment: ['dumbbell'], movement: 'pull' },
  { id: 'barbell_curl', name: 'Barbell Curl', muscles: ['biceps'], equipment: ['barbell'], movement: 'pull' },
  { id: 'tricep_dip', name: 'Tricep Dip', muscles: ['triceps', 'chest'], equipment: ['bodyweight'], movement: 'push' },
  { id: 'tricep_pushdown', name: 'Tricep Pushdown', muscles: ['triceps'], equipment: ['cable'], movement: 'push' },
  { id: 'overhead_tricep_extension', name: 'Overhead Tricep Extension', muscles: ['triceps'], equipment: ['dumbbell'], movement: 'push' },

  { id: 'squat', name: 'Squat', muscles: ['quads', 'glutes'], equipment: ['barbell'], movement: 'legs' },
  { id: 'front_squat', name: 'Front Squat', muscles: ['quads'], equipment: ['barbell'], movement: 'legs' },
  { id: 'leg_press', name: 'Leg Press', muscles: ['quads'], equipment: ['machine'], movement: 'legs' },
  { id: 'lunge', name: 'Lunge', muscles: ['quads', 'glutes'], equipment: ['bodyweight', 'dumbbell'], movement: 'legs' },
  { id: 'bulgarian_split_squat', name: 'Bulgarian Split Squat', muscles: ['quads', 'glutes'], equipment: ['dumbbell'], movement: 'legs' },
  { id: 'leg_extension', name: 'Leg Extension', muscles: ['quads'], equipment: ['machine'], movement: 'legs' },
  { id: 'leg_curl', name: 'Leg Curl', muscles: ['hamstrings'], equipment: ['machine'], movement: 'legs' },
  { id: 'romanian_deadlift', name: 'Romanian Deadlift', muscles: ['hamstrings', 'glutes'], equipment: ['barbell'], movement: 'legs' },
  { id: 'deadlift', name: 'Deadlift', muscles: ['back', 'glutes'], equipment: ['barbell'], movement: 'legs' },
  { id: 'calf_raise', name: 'Calf Raise', muscles: ['calves'], equipment: ['bodyweight', 'machine'], movement: 'legs' },

  { id: 'plank', name: 'Plank', muscles: ['core'], equipment: ['bodyweight'], movement: 'core' },
  { id: 'sit_up', name: 'Sit Up', muscles: ['core'], equipment: ['bodyweight'], movement: 'core' },
  { id: 'leg_raise', name: 'Leg Raise', muscles: ['core'], equipment: ['bodyweight'], movement: 'core' },
  { id: 'russian_twist', name: 'Russian Twist', muscles: ['core'], equipment: ['bodyweight', 'dumbbell'], movement: 'core' },
  { id: 'hanging_leg_raise', name: 'Hanging Leg Raise', muscles: ['core'], equipment: ['bodyweight'], movement: 'core' },
];

export const exerciseById: Record<string, Exercise> = Object.fromEntries(
  exercises.map((e) => [e.id, e]),
);
