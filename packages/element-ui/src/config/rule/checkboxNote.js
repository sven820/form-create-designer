import uniqueId from '@form-create/utils/lib/unique';
import {localeProps, makeOptionsRule, makeTreeOptions} from '../../utils/index';

const label = '多选框备注';
const name = 'checkboxNote';

export default {
    menu: 'main',
    icon: 'icon-checkbox',
    label,
    name,
    event: ['change'],
    validate: ['array'],
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            info: '',
            $required: false,
            effect: {
                fetch: ''
            },
            props: {
                input: '',
                value: '',
                defaultValue: [{ value: '111', label: '选项1' },]
            },
            options: [
                { value: '1', label: '选项1' },
                { value: '2', label: '选项2' },
            ]
        };
    },
    
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            makeOptionsRule(t, 'options'),
            ...[
                {
                    type: 'switch',
                    field: 'disabled'
                },
                {type: 'switch', field: 'input'},
                {
                    type: 'switch',
                    field: 'type',
                    props: {activeValue: 'button', inactiveValue: 'default'}
                },
                {
                    field: 'min',
                    type: 'inputNumber',
                    props: {
                        min: 0
                    }
                },
                {
                    field: 'max',
                    type: 'inputNumber',
                    props: {
                        min: 0
                    }
                },
                {
                    type: 'ColorInput',
                    field: 'textColor'
                },
                {
                    type: 'ColorInput',
                    field: 'fill'
                }
            ]
        ]);
    }
};


