import Handlebars, { HelperOptions } from 'handlebars';
import Block from './Block';

type BlockConstructable<Props> = {
    new(props: Props): Block<Props>;
    componentName: string;
};

export default function registerComponent<Props>(Component: BlockConstructable<Props>) {
    Handlebars.registerHelper(
        Component.componentName || Component.name,
        function register(this: Props, { hash: { ref, ...hash }, data, fn }: HelperOptions) {
            if (!data.root.children) {
                data.root.children = {};
            }

            if (!data.root.refs) {
                data.root.refs = {};
            }

            const { children, refs } = data.root;

            // Костыль для того, чтобы передавать переменные внутрь блоков, подменяя значение
            (Object.keys(hash) as (keyof Props)[]).forEach((key: keyof Props) => {
                if (this[key] && typeof this[key] === 'string') {
                    hash[key] = hash[key].replace(new RegExp(`{{${String(key)}}}`, 'i'), this[key]);
                }
            });

            const component = new Component(hash);

            children[component.id] = component;

            if (ref) {
                refs[ref] = component;
            }

            const contents = fn ? fn(this) : '';

            return `<div data-id="${component.id}">${contents}</div>`;
        },
    );
}
