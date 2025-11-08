import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow transition-all duration-200 hover:shadow-2xl">
      <div className="w-20 h-20 mb-6 relative group">
        <Image 
          src={icon} 
          alt={`${title} icon`}
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-2xl text-black font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}