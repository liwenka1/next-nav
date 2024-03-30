import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { NavData } from '@/config/site'

const LinkContent = () => {
  return (
    <div className="flex-1">
      {NavData.map((category, index) => {
        return (
          <div id={String(index)} key={index} className="mb-12">
            <div className="my-4">
              <h1 className="text-primary/80 mb-2 text-2xl font-bold sm:text-3xl">{category.title}</h1>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {category.items.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LinkContent
