export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string | null;
}

const projects: Project[] = [
  {
    title: 'DietScan',
    description: 'Description of project 1',
    tags: ['React', 'TypeScript'],
    link: 'https://github.com/Mango182/DietScan',
    image: null,
  },
  {
    title: 'Tumbling Box Numerical Methods',
    description: 'Description of project 2',
    tags: ['Python'],
    link: 'https://github.com/Mango182/tumbling-box-numerical-methods',
    image: null,
  },
  {
    title: 'CareerLog',
    description: 'Description of project 3',
    tags: ['tag5', 'tag6'],
    link: 'https://github.com/Mango182/CareerLog',
    image: null,
  },
  {
    title: 'HabitQuest',
    description: 'Description of project 4',
    tags: ['tag7', 'tag8'],
    link: 'https://github.com/Mango182/HabitQuest',
    image: null,
  },
];

export default projects;