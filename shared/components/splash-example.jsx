/* global React, ReactIntl */

import LocaleSelect from './locale-select';

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

export default React.createClass({
    displayName: 'SplashExample',

    getInitialState: function () {
        var locales = this.props.locales;

        return {
            currentLocale   : Array.isArray(locales) ? locales[0] : locales,
            currentNumPhotos: this.props.numPhotos
        };
    },

    updateLocale: function (newLocale) {
        this.setState({currentLocale: newLocale});
    },

    handleNumPhotosChange: function (e) {
        this.setState({currentNumPhotos: parseInt(e.target.value, 10)});
    },

    render: function () {
        var {FormattedMessage} = ReactIntl;

        var currentLocale = this.state.currentLocale;
        var photosMessage = this.props.messages[currentLocale].photos;

        var numPhotosOptions = this.props.availableNumPhotos.map(function (num) {
            return <option key={num} value={num}>{num}</option>;
        });

        return (
            <div className="splash-example">
                <h2 className="splash-example-heading">Example</h2>

                <div className="splash-example-output">
                    <CSSTransitionGroup
                        transitionName="example-output"
                        transitionLeave={false}>

                        <FormattedMessage
                            message={photosMessage}
                            key={JSON.stringify(this.state)}
                            locales={currentLocale}
                            name={this.props.name}
                            numPhotos={this.state.currentNumPhotos}
                            takenDate={this.props.takenDate} />
                    </CSSTransitionGroup>
                </div>

                <form className="splash-example-controls">
                    <label className="splash-example-control">
                        <span className="splash-example-label">
                            # Photos:
                        </span>

                        <select className="num-photos-select"
                            value={this.state.currentNumPhotos}
                            onChange={this.handleNumPhotosChange}>

                            {numPhotosOptions}
                        </select>
                    </label>

                    <label className="splash-example-control">
                        <span className="splash-example-label">
                            Locale:
                        </span>

                        <LocaleSelect
                            availableLocales={this.props.availableLocales}
                            value={currentLocale}
                            onChange={this.updateLocale} />
                    </label>
                </form>
            </div>
        );
    }
});
