import uniqueId from '@form-create/utils/lib/unique';
import { makeOptionsRule, makeRequiredRule } from '../../utils/index';
const label = '表格';
const name = 'formTable';

export default {
    menu: 'main',
    icon: 'el-icon-date',
    label,
    name,
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
                defaultValue: [{ value: '111', label: '表头字段' },]
            },
            options: [
                { value: '1', label: '表头字段1' },
                // { value: '2', label: '表头字段2' },
            ]
        };
    },
    props() {
        return [
            makeOptionsRule('options'),
            makeRequiredRule(),

        ];
    }
};


