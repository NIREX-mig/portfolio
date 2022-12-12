import { FaGraduationCap, FaDesktop, FaBookOpen } from 'react-icons/fa';

const Resume = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container py-10 mx-auto">
          <h2 className='text-center my-4 text-4xl font-bold'>RESUME</h2>
          <div class="flex flex-wrap -m-4">

            {/* Technical skills */}
            <div class="p-8 md:w-1/3">
              <div class="flex rounded-lg h-full bg-white border p-8 flex-col" style={{ boxShadow: '2px 2px 5px 1px rebeccapurple' }}>
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaDesktop />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">Technical Skills</h2>
                </div>
                <div class="flex-grow">
                  <ul className='list'>
                    <li >Programming Languages:</li>
                    <div className='mx-2 mb-3'>C, java, python, VB.net</div>

                    <li>Web Technologies:</li>
                    <div className='mx-2 mb-3'>HTML, CSS, Javascript, ReactJs, NodeJs, Bootstrape, Tailwind</div>

                    <li>Databases and Scripting:</li>
                    <div className='mx-2 mb-3'>MongoDB, Mysql</div>
                  </ul>
                </div>
              </div>
            </div>

            {false ? 'Technical Knowledge' : ""}

            <div class="p-8 md:w-1/3">
              <div class="flex rounded-lg h-full bg-white border p-8 flex-col" style={{ boxShadow: '2px 2px 5px 1px rebeccapurple' }}>
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaBookOpen />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">Technical Knowledge</h2>
                </div>
                <div class="flex-grow">
                  <table>
                    <tbody>
                      <tr>
                        <td>Web devloper</td>
                        <td>Operation systems</td>
                      </tr>
                      <tr>
                        <td>Data Structures</td>
                        <td>Database System</td>
                      </tr>
                      <tr>
                        <td>Computer Networks</td>
                        <td>Softwere developer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {false ? "Education section " : ''}

            <div class="p-8 md:w-1/3">
              <div class="flex rounded-lg h-full bg-white p-8 flex-col border" style={{ boxShadow: '2px 2px 5px 1px rebeccapurple' }}>
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaGraduationCap />
                  </div>
                  <h2 class="text-gray-900 text-lg title-font font-medium">Education</h2>
                </div>
                <div class="flex-grow">
                  <div className='mx-3 my-3'>Bacholar of Computer Applications</div>
                  <div className='mx-3'>C.M College,Darbhanga</div>
                  <div className='mx-3'>Lalit Narayan Mithila University</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Resume;
