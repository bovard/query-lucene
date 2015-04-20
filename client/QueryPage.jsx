/** @jsx React.DOM */
var React = require('react');

var Table = require('react-bootstrap').Table;
var moment = require('moment');


module.exports = React.createClass({
    propTypes: {},
    getInitialState: function() {
    },
    render: function() {
        return (
            <form className='query-horizontal'>
                <Input
                    type='text'
                    label='Search'
                    labelClassName='col-xs-2'
                    wrapperClassName='col-xs-10'
                />
                <Input
                    type="submit"
                    value="Search!"
                    wrapperClassName="col-xs-offset-2 col-xs-2" />
            </form>
        )

    }
});