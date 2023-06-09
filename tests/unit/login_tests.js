import { config, mount } from '@vue/test-utils'
import Markdown from '@/directives/markdown'
import Strings from '@/plugins/strings'

const strings = new Strings()
config.global.plugins = [strings]
config.global.directives = {
    markdown: Markdown()
}

it('generates markdown text', () => {
    const wrapper = mount({ template: '<p v-markdown>I like **Hobnobs** and _Digestives_!</p>' })
    expect(wrapper.html()).toBe('<p>I like <strong>Hobnobs</strong> and <em>Digestives</em>!</p>')
})

it('generates markdown text from attribute', () => {
    const wrapper = mount({ template: '<p v-markdown="`I like **Hobnobs** and _Digestives_!`"></p>' })
    expect(wrapper.html()).toBe('<p>I like <strong>Hobnobs</strong> and <em>Digestives</em>!</p>')
})

it('composes strings', () => {
    const wrapper = mount({ template: '<p v-markdown.set="`Hobnobs`">I like **:0**!</p>' })
    expect(wrapper.html()).toBe('<p>I like <strong>Hobnobs</strong>!</p>')
})

it('composes strings with arrays', () => {
    const wrapper = mount({ template: '<p v-markdown.set="[`Hobnobs`, `Digestives`]">I like **:0** and _:1_!</p>' })
    expect(wrapper.html()).toBe('<p>I like <strong>Hobnobs</strong> and <em>Digestives</em>!</p>')
})

it('generates block markdown', () => {
    const wrapper = mount({
        template: `
<div v-markdown.block>
# Top biscuits
</div>`
    })
    expect(wrapper.html()).toBe(`<div>
  <h1>Top biscuits</h1>
</div>`)
})

it('updates if props change', async () => {
    const wrapper = mount({
        template: '<p v-markdown.set="[favourite]">**:0** are my favourite biscuits.</p>',
        props: ['favourite']
    }, {
        propsData: {
            favourite: 'Hobnobs'
        }
    })
    expect(wrapper.html()).toBe('<p><strong>Hobnobs</strong> are my favourite biscuits.</p>')
    await wrapper.setProps({ favourite: 'Digestives' })
    expect(wrapper.html()).toBe('<p><strong>Digestives</strong> are my favourite biscuits.</p>')
})

