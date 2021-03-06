/* global React */

import SplashExample from './components/splash-example';

export default function init(state) {
    var splashProps = Object.assign({}, state.intl, state.examples.splash);
    var node        = document.querySelector('.splash-example-container');

    // Expose React component on its DOM node for testing.
    node.component = React.render(
        <SplashExample {...splashProps} />,
        node
    );
}
