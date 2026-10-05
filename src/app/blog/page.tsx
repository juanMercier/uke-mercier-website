import UpperSection from '@/components/UpperSection'
import BlogList from '@/components/BlogList'

export const dynamic = 'force-dynamic'

export default function Blog() {
    return (
        <div className='pt-24 md:pt-0'>
            <UpperSection title='Blog' imgLocation='/blog/background.jpg' />

            <section className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <BlogList />
                </div>
            </section>
        </div>
    )
}
