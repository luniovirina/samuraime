const TASKS = [
  { id: 0, frequency: 'daily', values: ['smile', 'be happy', 'work', 'read', 'code', 'drink coffee', 'sleep'] },
  { id: 1, frequency: 'monthly', values: ['check your bank account'] },
];

export const task = {
  getAllTasks() {
    return TASKS;
  },
  getTaskByFrequency(frequency: string) {
    return TASKS.find((t) => t.frequency === frequency);
  },
  createTask(frequency: string, taskname: string) {
    let frequency_values = task.getTaskByFrequency(frequency)?.values;
    if (frequency_values) {
      frequency_values.push(taskname);
      return true;
    } else {
      return false;
    }
  },
};
