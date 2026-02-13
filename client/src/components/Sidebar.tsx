// import React, { useEffect, useRef, useState } from 'react'
// import type { Message, Project, Version } from '../Prakar';
// import { BotIcon, EyeIcon, Loader2Icon, SendIcon, UserIcon } from 'lucide-react';
// import { Link } from 'react-router-dom';

// interface SidebarProps {
//     isMenuOpen : boolean;
//     project: Project,
//     setProject: (project: Project) => void;
//     isGenerating: boolean;
//     setIsGenerating: (isGenerating: boolean) => void;
// }

// const Sidebar = ({isMenuOpen, project, setProject, isGenerating, setIsGenerating} 
//     : SidebarProps) => {

//   const messageRef = useRef<HTMLDivElement>(null)
//   const [input, setInput] = useState('')

//   const handleRollback = async(versionId : string) => {

//   }

       

//   useEffect(()=>{
//        messageRef.current.scrollIntoView({behavior : 'smooth'}) 
//   },[project.conversation.length, isGenerating])

//   return (
//     <div className={`h-full sm:max-w-sm rounded-xl bg-gray-900 border-gray-800 transition-all ${isMenuOpen ? 'max-sm:w-0 overflow-hidden' : 'w-full'}`}>
//         <div className='flex flex-col h-full'>
//             {/* Message container */}
//             <div className='flex-1 overflow-y-auto no-scrollbar px-3 flex flex-col gap-4'>
//                 {[...project.conversation, ...project.versions]
//                 .sort((a,b)=> new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()) .map((item)=>{
//                     const isMessage = 'content' in item;

//                     if(isMessage) {
//                         const msg = item as Message;
//                         const isUser = msg.role === 'user';
//                         return (
//                             <div key={msg.id} className={`flex items-center gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
//                                 {!isUser && (
//                                     <div className='w-8 h-8 rounded-full bg-linear-to-br from-indigo-600 to-indigo-700 flex items-center justify-center'>
//                                         <BotIcon className='size-5 text-white' />
//                                     </div>
//                                 )}

//                                 <div className={`max-w-[80%] py-2 px-4 rounded-2xl shadow-sm text-sm mt-5 leading-relaxed ${isUser ? "bg-linear-to-r from-indigo-500 to-indigo-600 text-white rounded-tr-none" : "text-gray-800 rounded-tl-none bg-gray-800"}`}>
//                                     {msg.content}
//                                 </div>
//                                 {isUser && (
//                                     <div>
//                                         <UserIcon className='size-5 text-gray-200'/> 
//                                     </div>
//                                 )}
//                             </div>
//                         )
//                     }
//                     const ver = item as Version;
//                     return (
//                         <div key={ver.id} className='w-4/5 mx-auto my-2 p-3 rounded-xl bg-gray-800 text-gray-100 shadow flex flex-col gap-2'>
//                             <div className='text-xs font-medium'>
//                                 Code Updated <br /> <span className='text-gray-500 text-xs font-normal'>
//                                     {new Date(ver.timestamp).toLocaleString()}
//                                 </span>
//                             </div>
//                             <div className='flex items-center justify-between'> 
//                                 {project.current_version_index === ver.id ? (
//                                     <button className='px-3 py-1 rounded-md text-xs bg-gray-700'>Current Version</button>
//                                 ) :(
//                                     <button onClick={()=> handleRollback(ver.id)} className='px-3 py-1 rounded-md text-xs bg-indigo-500 hover:bg-indigo-600 text-white'>
//                                         Roll Back to this Version
//                                     </button>
//                                 )}
//                                 <Link target='_blank' to={`/preview/${project.id}/${ver.id}`}>
//                                   <EyeIcon className='size-6 p-1 bg-gray-700 hover:bg-indigo-500 transition-colors rounded'/>
//                                 </Link>
//                             </div>
//                         </div>
//                     )
//                 })}

//                 {isGenerating && (
//                     <div className='flex items-start gap-3 justify-start'>
//                         <div className='w-8 h-8 rounded-full bg-linear-to-br from-indigo-600 to-indigo-700 flex items-center justify-center'>
//                             <BotIcon className='size-5 text-white' />
//                         </div>
//                         {/* three dot icon */}
//                         <div className='flex gap-1.5 h-full items-end'>
//                             <span className='size-2 rounded-full animate-bounce bg-gray-600' style={{animationDelay : '0s'}}/>
//                             <span className='size-2 rounded-full animate-bounce bg-gray-600' style={{animationDelay : '0.2s'}}/>
//                             <span className='size-2 rounded-full animate-bounce bg-gray-600' style={{animationDelay : '0.4s'}}/>
//                         </div>
//                     </div>
//                 )
//                 }

//                 <div ref={messageRef}/>
//             </div>
//             {/* Input Area */}
//             <form className='m-3 relative'>
//                 <div className='flex items-center gap-2'>
//                     <textarea onChange={(e)=>setInput(e.target.value)} value={input} rows={4} placeholder='Describe your website or request Changes...' 
//                     className='flex-1 p-3 rounded-xl resize-none text-sm outline-none ring ring-gray-700 focus:ring-indigo-500 bg-gray-800 text-gray-100 placeholder-gray-400 transition-all'
//                      disabled={isGenerating} />
//                     <button type="submit" disabled={isGenerating} >
//                         {isGenerating 
//                         ? ( <Loader2Icon className='size-7 p-1.5 animate-spin text-white' />
//                     ) : ( <SendIcon className='size-7 p-1.5 text-white' /> )}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Sidebar

import React, { useEffect, useRef, useState } from 'react'
import type { Message, Project, Version } from '../Prakar'
import { BotIcon, EyeIcon, Loader2Icon, SendIcon, UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import api from '@/configs/axios'
import { toast } from 'sonner'

interface SidebarProps {
  isMenuOpen: boolean
  project: Project
  setProject: (project: Project) => void
  isGenerating: boolean
  setIsGenerating: (isGenerating: boolean) => void
}

const Sidebar = ({isMenuOpen, project, setProject, isGenerating, setIsGenerating,
}: SidebarProps) => {
  const messageRef = useRef<HTMLDivElement>(null)
  const [input, setInput] = useState('')

  const fetchProject = async() => {
    try {
      const {data} = await api.get(`/api/user/project/${project.id}`)
      setProject(data.project)
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
      console.log(error);
    }
  }

  const handleRollback = async(versionId: string) => {
    // rollback logic here
    setIsGenerating(true)
    try {
      const confirm = window.confirm('Are you sure you want to rollback to this version?')
      if(!confirm) return;
      const {data} = await api.get(`/api/project/rollback/${project.id}/${versionId}`);
      const {data : data2} = await api.get(`/api/user/project/${project.id}`);
      toast.success(data.message)
      setProject(data2.project)
      setIsGenerating(false)
    } catch (error: any) {
      setIsGenerating(false)
      toast.error(error?.response?.data?.message || error.message)
      console.log(error);
    }

  }

  const handleRevisions = async(e:React.FormEvent) =>{
    e.preventDefault()
    let interval: number | undefined;
    try {
      setIsGenerating(true);
      interval = setInterval(()=>{
        fetchProject();
      },10000)
      const {data} = await api.post(`/api/project/revision/${project.id}`,
      {message: input})
      fetchProject();
      toast.success(data.message)
      setInput('')
      // clearInterval(interval)
      setIsGenerating(false);
    } catch (error: any) {
      setIsGenerating(false);
      toast.error(error?.response?.data?.message || error.message);
      console.log(error);
      clearInterval(interval)
    }
  }

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [project.conversation.length, project.versions.length, isGenerating])

  return (
    <div
      className={`h-full sm:max-w-sm rounded-xl bg-gray-900 border border-gray-800 transition-all
      ${isMenuOpen ? 'max-sm:w-0 overflow-hidden' : 'w-full'}`}
    >
      <div className="flex flex-col h-full">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-3 flex flex-col gap-4">
          {[...project.conversation, ...project.versions]
            .sort(
              (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
            )
            .map((item) => {
              const isMessage = 'content' in item

              if (isMessage) {
                const msg = item as Message
                const isUser = msg.role === 'user'

                return (
                  <div
                    key={msg.id} className={`flex gap-3 ${
                      isUser ? 'justify-end' : 'justify-start'
                    }`}>
                    {/* Bot Avatar */}
                    {!isUser && (
                      <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-600 to-indigo-700 flex items-center justify-center shrink-0">
                        <BotIcon className="size-5 text-white" />
                      </div>
                    )}

                    {/* Message Bubble */}
                    <div
                      className={`max-w-[80%] px-4 py-2 text-sm leading-relaxed rounded-2xl shadow
                      ${isUser
                          ? 'bg-linear-to-r from-indigo-500 to-indigo-600 text-white rounded-tr-none'
                          : 'bg-gray-800 text-gray-100 rounded-tl-none'
                      }`}>
                      {msg.content}
                    </div>

                    {/* User Avatar */}
                    {isUser && (
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center shrink-0">
                        <UserIcon className="size-5 text-gray-200" />
                      </div>
                    )}
                  </div>
                )
              }

              // Version Card
              const ver = item as Version
              return (
                <div
                  key={ver.id}
                  className="w-4/5 mx-auto my-2 p-3 rounded-xl bg-gray-800 text-gray-100 shadow flex flex-col gap-2"
                >
                  <div className="text-xs font-medium">
                    Code Updated
                    <br />
                    <span className="text-gray-400 text-xs font-normal">
                      {new Date(ver.timestamp).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    {project.current_version_index === ver.id ? (
                      <button className="px-3 py-1 rounded-md text-xs bg-gray-700 cursor-default">
                        Current Version
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRollback(ver.id)}
                        className="px-3 py-1 rounded-md text-xs bg-indigo-500 hover:bg-indigo-600 text-white"
                      >
                        Roll Back to this Version
                      </button>
                    )}

                    <Link
                      target="_blank"
                      to={`/preview/${project.id}/${ver.id}`}
                    >
                      <EyeIcon className="size-6 p-1 bg-gray-700 hover:bg-indigo-500 transition-colors rounded" />
                    </Link>
                  </div>
                </div>
              )
            })}

          {/* Typing indicator */}
          {isGenerating && (
            <div className="flex items-start gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-600 to-indigo-700 flex items-center justify-center">
                <BotIcon className="size-5 text-white" />
              </div>
              <div className="flex gap-1.5 h-full items-end">
                <span
                  className="size-2 rounded-full animate-bounce bg-gray-500"
                  style={{ animationDelay: '0s' }}
                />
                <span
                  className="size-2 rounded-full animate-bounce bg-gray-500"
                  style={{ animationDelay: '0.2s' }}
                />
                <span
                  className="size-2 rounded-full animate-bounce bg-gray-500"
                  style={{ animationDelay: '0.4s' }}
                />
              </div>
            </div>
          )}

          <div ref={messageRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleRevisions} className="m-3 relative">
          <div className="flex items-center gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={4}
              disabled={isGenerating}
              placeholder="Describe your website or request changes..."
              className="flex-1 p-3 rounded-xl resize-none text-sm outline-none ring ring-gray-700 focus:ring-indigo-500 bg-gray-800 text-gray-100 placeholder-gray-400 transition-all"
            />
            <button className='absolute bottom-2.5 right-2.5 rounded-full bg-linear-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white transtition-colors disabled:opacity-60'
             type="submit" disabled={isGenerating || !input.trim()}>
              {isGenerating ? (
                <Loader2Icon className="size-7 p-1.5 animate-spin text-white" />
              ) : (
                <SendIcon className="size-7 p-1.5 text-white" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Sidebar