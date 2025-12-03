import React, { useState } from 'react'

const FAQ = () => {

    const [showFaq, setShowFaq] = useState(false);
    const [showAnswer, setShowAnswer] = useState(0);

    const faqData = [
        {
            id: 1,
            question: 'How did I build this Netflix Clone UI?',
            answer: `I built this application entirely using React.js for the frontend and TailwindCSS for styling. React helped me create reusable components, and TailwindCSS made it easy to design a clean and responsive UI similar to Netflix.`
        },
        {
            id: 2,
            question: "Where does the movie and TV data come from?",
            answer: 'All movie data—such as titles, posters, ratings, and descriptions—comes from the TMDB (The Movie Database) API. I used Axios to make API calls and fetch data dynamically based on categories and search queries.'
        },
        {
            id: 3,
            question: 'How do the category filters work?',
            answer: 'I added a filter button with categories like Action, Adventure, Comedy, etc. When a user selects a category, the app sends a request to the TMDB API using that category ID and displays movies related to that genre.'
        },
        {
            id: 4,
            question: 'Can I search for any movie in this app?',
            answer: 'Yes! The app includes a search bar where users can type any movie name. Based on the input, I send a search request to TMDB using Axios and instantly show the results that match the search query.'
        },
        {
            id: 5,
            question: 'What information is shown on the Movie Details page?',
            answer: 'When a user clicks a movie, they are taken to a Movie Details page. This page displays key information like the title, overview (story summary), rating, adult content indicator, release date, and poster. All details are fetched directly using the movie’s ID from TMDB.'
        }
    ]


    const handleFaq = (id) => {
        if (!showFaq) {
            let isMatched = faqData.filter((f) => f.id == id);
            if (isMatched) {
                setShowAnswer(id);
                setShowFaq(true)
            }
        } else {
            setShowAnswer(0);
            setShowFaq(false)
        }

    }

    return (
        <div className='my-8 max-w-6xl mx-auto w-full'>
            <h1 className='text-lg lg:text-xl xl:text-2xl font-bold'>Here i showed FAQ based on this project</h1>
            <div className='flex flex-col gap-5 text-wrap mt-5'>
                {
                    faqData.map((f) => {
                        return (
                            <div key={f.id} className='bg-gray-800 p-3 md:py-5 lg:py-8 rounded-md shadow-sm shadow-gray-600  transition-all  duration-500 ease-in-out hover:bg-gray-700'>
                                <h1 className='text-lg md:text-2xl font-semibold flex items-center justify-between'>{f.question}
                                    {showFaq && showAnswer == f.id ? <i onClick={() => handleFaq(f.id)} className="fa-solid fa-x cursor-pointer"></i> : <i onClick={() => handleFaq(f.id)} className="fa-solid fa-plus cursor-pointer"></i>}
                                </h1>
                                <p className={`text-sm md:text-lg font-semibold pt-5 ${showFaq && showAnswer == f.id ? 'transform translate-y-0 block transition-all duration-500 ease-in-out' : 'transition-all duration-500 ease-in-out hidden transform -translate-y-8'}`}>{f.answer}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FAQ
