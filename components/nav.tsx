import { ScrollArea } from '@/components/ui/scroll-area'
import { NavData } from '@/config/site'

const Nav = () => {
  return (
    <ScrollArea className="w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {NavData.map((category, index) => (
          <div key={index} className="text-sm">
            {category.title}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export default Nav
