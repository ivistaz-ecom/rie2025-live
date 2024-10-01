import Head from 'next/head'

const page = () => {
  return (
    <div>
      <head>
        <title>Contact Page</title>
      </head>
      <div className="bg-rie-blue h-screen p-20">
        <div className="container mx-auto flex justify-center">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
            <div className="bg-rie-blue text-white p-6">
              <h2 className="text-xl font-bold">Contact Information</h2>
            </div>
            <div className="p-8 space-y-2">
              <p className="text-black">
                Registered Address <br />
                ‘Casa Fina’, No 5, Primrose Road, <br />
                Bangalore -560025, <br />
                Karnataka <br />
                India
              </p>
              <div>
                <a
                  href="mailto:rie@eobangalore.com"
                  className="text-rie-blue underline block"
                >
                  rie@eobangalore.com
                </a>
                <p className="text-black">Tel: +91 96200 11999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
