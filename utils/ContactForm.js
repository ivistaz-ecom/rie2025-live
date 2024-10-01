// components/ContactForm.js
'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { RotatingLines } from 'react-loader-spinner'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from './actions'
import Chapter from '../utils/Chapters'

const ContactForm = () => {
  const isModalOpen = useSelector((state) => state.isModalOpen)
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState(true)
  const [formVisible, setFormVisible] = useState(true)
  const [recaptchaToken, setRecaptchaToken] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [chapter, setChapter] = useState(null)

  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    // businessPhoneNumber: '',
    chapter: chapter,
  })
  const isBlank = (str) => {
    return !str.trim()
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
    setLoader(false)
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://www.google.com/recaptcha/api.js?render=6LceoMEpAAAAAC_42zm_onTXnP9pUoD_8goyf4Ck'
    script.async = true
    document.body.appendChild(script)

    const timeout = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => {
      document.body.removeChild(script)
      clearTimeout(timeout)
    }
  })

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const customErrors = {
    field: 'businessEmail',
    message: 'Please enter a valid email address.',
  }

  const phoneRegex = /^\d+$/
  const customPhoneErrors = {
    field: 'businessPhoneNumber',
    message: 'Please enter only numbers.',
  }

  const customDomainErrors = {
    field: 'businessEmail',
    message: 'This email domain is not allowed.',
  }

  const notAllowedDomains = [
    'test.com',
    'sample.com',
    'example.com',
    'testing.com',
  ]
  function isValidEmail(email) {
    const [_, domain] = email.split('@')
    return notAllowedDomains.includes(domain)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    //alert(e.target.name)

    if (e.target.name === 'businessEmail') {
      if (!emailRegex.test(e.target.value)) {
        console.log('enter valid email address')
        const fieldErrors = {}
        const { field, message } = customErrors
        fieldErrors[field] = message
        setErrors(fieldErrors)
        //alert('valid email enter')
      } else {
        //console.log('valid email')
        setErrors()
      }
      if (isValidEmail(e.target.value)) {
        console.log('Email domain is not allowed')
        const fieldErrors = {}
        const { field, message } = customDomainErrors
        fieldErrors[field] = message
        setErrors(fieldErrors)
      } else {
        console.log('Email domain is allowed')
      }
    }

    if (e.target.name === 'businessPhoneNumber') {
      if (!phoneRegex.test(e.target.value)) {
        console.log('enter valid phone number')
        const fieldErrors = {}
        const { field, message } = customPhoneErrors
        fieldErrors[field] = message
        setErrors(fieldErrors)
      } else if (e.target.value.length > 11) {
        console.log('More than 10 characters')
        e.target.value = ''
      } else {
        //console.log('valid number')
        setErrors()
      }
    }

    if (e.target.name === 'chapter') {
      //alert(e.target.value)
      setChapter(e.target.value)
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Verify reCAPTCHA token
    // if (!recaptchaToken) {
    //     setError('Please verify that you are not a robot.');
    //     setIsSubmitting(false);
    //     return;
    // }

    // if (isBlank(formData.fullName)) {
    //     setError('Please enter a full name.');
    //     setIsSubmitting(false);
    //     return;
    // }

    // if (isBlank(formData.businessEmail)) {
    //     setError('Please enter a Email.');
    //     setIsSubmitting(false);
    //     return;
    // }

    // if (isBlank(formData.message)) {
    //     setError('Please enter a Message.');
    //     setIsSubmitting(false);
    //     return;
    // }

    try {
      const token = await new Promise((resolve, reject) => {
        window.grecaptcha
          .execute('6LceoMEpAAAAAC_42zm_onTXnP9pUoD_8goyf4Ck', {
            action: 'submit',
          })
          .then(resolve)
          .catch(reject)
      })

      const response = await axios.post(
        'https://docs.rie2025.com/wp-json/contact-form-7/v1/contact-forms/7/feedback',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      console.log(response.data)
      if (response.data.status === 'mail_sent') {
        setFormVisible(false) // Hide the form
        setSuccessMessage(false)
        setIsVisible(true)
      } else {
        const fieldErrors = {}
        const { status, invalid_fields } = response.data
        invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message
        })
        setErrors(fieldErrors)
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    }

    setIsSubmitting(false)
  }

  // const handleRecaptchaChange = (token) => {
  //     setRecaptchaToken(token);
  // };

  return (
    <>
      {isModalOpen && (
        <>
          {successMessage && (
            <div
              className={` bg-rie-transparent h-full fixed top-0 bottom-0 right-0 left-0 z-50 w-full md:inset-0 max-h-full overflow-y-auto overflow-x-hidden content-center`}
            >
              <div class="relative p-4 w-full max-w-2xl max-h-full transition ease-in-out animate-pulse mx-auto">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold font-avertalight text-gray-900 dark:text-white">
                      GET ACCESS
                    </h3>
                    <button
                      type="button"
                      class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={handleCloseModal}
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </button>
                  </div>

                  <div class="p-4 md:p-5">
                    <h3 class="text-xl font-semibold font-avertalight text-gray-900 dark:text-white">
                      Sorry, Registration is Closed.
                    </h3>
                    {/* <form
                      onSubmit={handleSubmit}
                      encType="multipart/form-data"
                      class="space-y-4"
                    >
                      <div>
                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-avertalight"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          id="fname"
                          placeholder=""
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                        {errors && errors.fullName && (
                          <div className="text-red-500 font-avertalight text-1xl">
                            {errors.fullName}
                          </div>
                        )}
                      </div>
                      <div>
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-avertalight"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="businessEmail"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder=""
                          value={formData.businessEmail}
                          onChange={handleChange}
                        />
                        {errors && errors.businessEmail && (
                          <div className="text-red-500 font-avertalight">
                            {errors.businessEmail}
                          </div>
                        )}
                      </div>
                      <div>
                        <label
                          for="password"
                          class="block mb-2 text-1xl font-medium text-gray-900 dark:text-white font-avertalight"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          name="businessPhoneNumber"
                          id="password"
                          placeholder=""
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          value={formData.businessPhoneNumber}
                          onChange={handleChange}
                        />
                        {errors && errors.businessPhoneNumber && (
                          <p className="text-red-500 font-avertalight">
                            {errors.businessPhoneNumber}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          for="chapters"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-avertalight"
                        >
                          Chapters
                        </label>
                        <select
                          id="chapters"
                          name="chapter"
                          value={chapter}
                          onChange={handleChange}
                          class="font-avertalight bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Choose a chapter</option>

                          {Chapter.map((items, index) => (
                            <option value={items.name} key={index}>
                              {items.name}
                            </option>
                          ))}
                        </select>
                        {errors && errors.chapter && (
                          <p className="text-red-500 font-avertalight">
                            {errors.chapter}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        class="block text-white bg-rie-pink hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-9 py-2.5 text-center me-2 mb-2 border-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <RotatingLines
                            strokeColor="white"
                            strokeWidth="3"
                            animationDuration="1"
                            width="20"
                            visible={true}
                          />
                        ) : (
                          'GET ACCESS'
                        )}
                      </button>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {isVisible && (
        <div
          id="toast-success"
          class="fixed mx-auto flex items-center w-full max-w-lg p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 bottom-0 border-2 border-rie-yellow"
          role="alert"
        >
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              class="w-8 h-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="sr-only">Check icon</span>
          </div>
          <div class="ms-3 font-avertalight text-1xl">
            Hey, thanks for filling the form! You've officially tossed your hat
            into the ring. Now, let's see if it fits as well as you think. We'll
            be in touch!
          </div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}

export default ContactForm
