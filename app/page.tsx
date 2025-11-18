'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function BirthdayPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Create floating balloons
    const createBalloons = () => {
      const balloons = ['🎈', '🎉', '🎊', '🎂', '🎁']
      for (let i = 0; i < 5; i++) {
        const balloon = document.createElement('div')
        balloon.style.position = 'fixed'
        balloon.style.fontSize = '3em'
        balloon.style.left = i * 20 + 10 + '%'
        balloon.style.bottom = '-100px'
        balloon.style.animation = `float-up 6s ease-in-out infinite`
        balloon.style.animationDelay = i + 's'
        balloon.textContent = balloons[i]
        document.body.appendChild(balloon)
      }
    }

    // Create confetti
    const createConfetti = () => {
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7d794', '#ff85a2']
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div')
        confetti.style.position = 'fixed'
        confetti.style.width = '10px'
        confetti.style.height = '10px'
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)]
        confetti.style.left = Math.random() * 100 + '%'
        confetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear forwards`
        confetti.style.animationDelay = Math.random() * 3 + 's'
        document.body.appendChild(confetti)
      }
    }

    createBalloons()
    setTimeout(createConfetti, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600">
      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-50vh) translateX(20px);
          }
          100% {
            transform: translateY(-100vh) translateX(-20px);
          }
        }

        @keyframes confetti-fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bounce-text {
          animation: bounce 2s infinite;
        }

        .fade-in-down {
          animation: fadeInDown 1s ease-out;
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center py-20 fade-in-down">
          <h1 className="text-7xl font-bold text-white mb-6 drop-shadow-lg bounce-text">
            Happy Birthday!
          </h1>
          <p className="text-3xl text-white drop-shadow-md">
            Wishing you the most amazing day ever!
          </p>
        </div>

        {/* Wishes Section */}
        <div className="bg-white rounded-3xl p-12 my-10 shadow-2xl fade-in-up">
          <h2 className="text-4xl font-bold text-purple-600 text-center mb-8 pb-4 border-b-4 border-purple-600">
            Birthday Wishes
          </h2>
          <div className="space-y-6">
            {[
              "Wishing you a day filled with love, laughter, and all your favorite things! May this year bring you endless joy and amazing adventures. You deserve all the happiness in the world!",
              "Happy Birthday to someone who makes every day brighter! Thank you for being such an incredible person. Here's to another year of wonderful memories together!",
              "Another year older, another year wiser, and another year of being absolutely amazing! May all your dreams come true this year. Cheers to you!",
              "You light up every room you walk into and make everyone around you smile. Today we celebrate YOU and all the joy you bring to our lives!"
            ].map((wish, i) => (
              <div key={i} className="bg-gradient-to-br from-orange-100 to-rose-100 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <p className="text-lg text-gray-800 leading-relaxed">{wish}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photos Section */}
        <div className="bg-white rounded-3xl p-12 my-10 shadow-2xl fade-in-up">
          <h2 className="text-4xl font-bold text-purple-600 text-center mb-8 pb-4 border-b-4 border-purple-600">
            Your Memories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/d1.jpeg', caption: 'Best day ever! 🎈' },
              { src: '/images/d6.jpeg', caption: 'cuteee 👯' },
              { src: '/images/d4.jpeg', caption: ' Heeeheeee💕' },
              { src: '/images/d9.jpeg', caption: 'pretty smile 😍' },
              { src: '/images/d7.jpeg', caption: 'Pure happiness 🌈' },
              { src: '/images/d8.jpeg', caption: ' Gloryyyy❤️‍🔥' }
              
              
            ].map((photo, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all h-64">
                {photo.src && (photo.src.startsWith('http') ? (
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                ))}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                    {photo.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Music Section */}
        <div className="bg-white rounded-3xl p-12 my-10 shadow-2xl fade-in-up text-center">
          <h2 className="text-4xl font-bold text-purple-600 mb-6">Your Birthday Soundtrack</h2>
          <p className="text-gray-600 mb-6 text-lg">Songs to celebrate you!</p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://open.spotify.com/embed/playlist/1ZFUlIYYh1NInYhBEATh3r?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>

        {/* Letter Section */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-3xl p-12 my-10 shadow-2xl fade-in-up relative mb-20">
          <div className="text-5xl absolute -top-8 left-1/2 transform -translate-x-1/2">✉️</div>
          <h2 className="text-4xl font-bold text-purple-600 text-center mb-8 pt-4">A Special Letter For You</h2>
          
          <div className="bg-white p-10 rounded-xl shadow-inner max-w-2xl mx-auto">
            <p className="text-2xl font-bold text-purple-600 mb-4">Dear Vaishnavi❤️😍,</p>
            
            <div className="text-gray-800 space-y-4 leading-relaxed font-mono text-lg">
              <p>Today is your special day, and we wanted to take a moment to tell you just how much you mean to us.</p>
              
              <p>From the first day we met, you've brought nothing but joy, laughter, and light into  life. Your kindness, your humor, and your incredible spirit make you one of a kind.</p>
              
              <p>We are so grateful for all the memories we've shared - the adventures, the late-night studies, the silly moments, and everything in between. You've been there through thick and thin.</p>
              
              <p>As you celebrate another year, we hope you know how truly special you are. You deserve all the happiness, success, and love that life has to offer. This year, we wish for you:</p>
              
              <div className="pl-6 space-y-2">
                <p>✨ Adventures that take your breath away</p>
                <p>💖 Love that fills your heart</p>
                <p>🌟 Dreams that become reality</p>
                <p>🎊 Moments that make you smile</p>
              </div>
              
              <p>Thank you for being YOU - authentic, amazing, and absolutely wonderful. The world is a better place with you in it.</p>
              
              <p>Here's to another year of love, laughter, and unforgettable memories!</p>
              
              <div className="text-right mt-8 italic text-purple-600 text-xl">
                <p>With love and birthday wishes,</p>
                <p className="font-bold">From Soham & Palesa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
