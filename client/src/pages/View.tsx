import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Loader2Icon } from "lucide-react";
import Projectprev from "../components/Projectprev";
import type { Project } from "../Prakar";
import api from "@/configs/axios";
import { toast } from "sonner";


const View = () => {

  const {projectId} = useParams();
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchCode = async()=>{
     try {
      const {data} =await api.get(`/api/project/published/${projectId}`);
      setCode(data.code)
      setLoading(false)
     } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
      console.log(error);
     }
  }

  useEffect(()=>{
    fetchCode()
  },[])

  if(loading){
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2Icon className="size-7 animate-spin text-indigo-200" />
      </div>
    )
  }

  return (
    <div className="h-screen">
        {code && <Projectprev project={{current_code: code} as Project}
         isGenerating={false} showEditorPanel={false} />}

    </div>
  )
}

export default View