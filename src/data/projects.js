import flowerStoreImg from '../assets/flower-store.jpg'
import voteAppImg from '../assets/vote-app.jpg'

const projects = [
  {
    id: 1,
    title: 'Flowers Store',
    category: 'React',
    image: flowerStoreImg,
    description:
      'An e-commerce website for a flower store showcasing floral products and prices. Features an interactive UI to manage items, update values, and perform delete/clear operations, demonstrating dynamic state management and user interactions.',
    repo: 'https://github.com/JasmineAsaad/iti_frontend_react/tree/main/project/day%2018/third-project-react',
    demo: 'https://iti-frontend-react.vercel.app',
  },
  {
    id: 2,
    title: 'Vote Collection (Like & Dislike)',
    category: 'React',
    image: voteAppImg,
    description:
      'A React component demonstrating dynamic state management and event handling for real-time user feedback. It tracks Like/Dislike counts, calculates the total rating instantly, and updates the status banner based on the current outcome.',
    repo: 'https://github.com/JasmineAsaad/iti_frontend_react/tree/main/project/day%2017/second-project-REACT',
    demo: 'https://iti-frontend-react-et5a.vercel.app/',
  },
]

export default projects
