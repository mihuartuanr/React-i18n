import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        /* 
        *由于在以下代码中写注释，webpack打包会报错，所以将注释提出来；
        *FormattedMessage组件中的信息parser后显示以<span>包裹的文本；
        *可以通过tagName指定其它标签包裹；
        *以id属性的值"hello"为索引——索引到自定义的映射表'./locale/zh_CN'中去；
        *messages['hello']——messages为父组件IntlProvider的props的messages属性；
        *若没有上述的返回值，则显示defaultMessage的值"React Intl Translations Example";
        */
        return (
            <div>
                <h1>
                    <div>
                        <FormattedMessage
                            id="hello"
                            defaultMessage="React Intl Translations Example"
                        />
                    </div>
                </h1>

                <h4>
                    <FormattedMessage
                        tagName = 'p'
                        id='superHello'
                        defaultMessage="Locales:北京"
                        values={{
                            someone:'zxdobest'
                        }}
                    />
                </h4>
            </div>
        );
    }
}

export default App;