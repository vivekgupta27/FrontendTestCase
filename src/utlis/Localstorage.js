const Profiles=[
  {
    "name": "John Doe",
    "profileImg": "https://randomuser.me/api/portraits/men/32.jpg",
    "description": "A passionate traveler and food enthusiast, always looking to explore new cultures and cuisines. John enjoys photography and sharing his experiences through social media.",
    "city": "New York",
    "latitude": 40.712776,
    "longitude": -74.005974
  },
  {
    "name": "Emma Wilson",
    "profileImg": "https://randomuser.me/api/portraits/women/24.jpg",
    "description": "Emma is a software developer with a love for coding and problem-solving. She enjoys working on tech projects and is particularly interested in AI and machine learning.",
    "city": "San Francisco",
    "latitude": 37.774929,
    "longitude": -122.419418
  },
  {
    "name": "Liam Brown",
    "profileImg": "https://randomuser.me/api/portraits/men/45.jpg",
    "description": "Liam is a graphic designer and artist, always experimenting with colors and textures. He loves creating unique art pieces and has a keen eye for aesthetics.",
    "city": "Los Angeles",
    "latitude": 34.052235,
    "longitude": -118.243683
  },
  {
    "name": "Sophia Martinez",
    "profileImg": "https://randomuser.me/api/portraits/women/30.jpg",
    "description": "Sophia is a digital marketer with a background in social media strategy. She is passionate about helping brands grow and enjoys creating content that engages people.",
    "city": "Chicago",
    "latitude": 41.878113,
    "longitude": -87.629799
  },
  {
    "name": "Michael Green",
    "profileImg": "https://randomuser.me/api/portraits/men/50.jpg",
    "description": "Michael is a fitness trainer and nutrition enthusiast who believes in holistic health. He works with clients to achieve their health goals and enjoys hiking on weekends.",
    "city": "Seattle",
    "latitude": 47.606209,
    "longitude": -122.332069
  },
  {
    "name": "Olivia Jones",
    "profileImg": "https://randomuser.me/api/portraits/women/65.jpg",
    "description": "Olivia is a writer and avid reader, fascinated by historical fiction. She enjoys attending literary events and sharing book recommendations on her blog.",
    "city": "Austin",
    "latitude": 30.267153,
    "longitude": -97.743057
  }
]

const setLocalStorage=()=>{
  localStorage.setItem('profiles', JSON.stringify(Profiles));
}

const getLocalStorage=()=>{
  const storedProfiles=localStorage.getItem('profiles');
    return JSON.parse(storedProfiles);

}

export {setLocalStorage, getLocalStorage}