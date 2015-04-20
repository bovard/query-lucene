/** @jsx React.DOM */
var React = require('react');

var request = require('browser-request');

var Input = require('react-bootstrap').Input;
var Well = require('react-bootstrap').Well;
var moment = require('moment');


module.exports = React.createClass({
    propTypes: {},
    getInitialState: function() {
        return {
            numResults: 0,
            results: []
        };
    },
    onSubmit: function() {
        var searchTerm = this.refs.search.getValue().trim()
    },
    render: function() {
        return (
            <div>
                <h1>112th Congress Bill Query Page</h1>
                <h5>Search for text to see bills from the 112th congress (2011-2012)</h5>
                <h6>Search over 15,163 bills, resolutions and amendments.</h6>
                <span>
                Bills downloaded with <a href="https://github.com/unitedstates/congress/wiki">unitedstates/congress</a> from <a href="http://thomas.loc.gov/home/thomas.php">THOMAS.gov</a>.</span>
                <br />
                <br />
                <Well>
                    <form className='form-horizontal' onSubmit={this.onSubmit}>
                        <Input
                            type='text'
                            label='Search'
                            ref='search'
                            labelClassName='col-xs-2'
                            wrapperClassName='col-xs-10'
                        />
                        <Input
                            type='select'
                            label='Format'
                            ref='format'
                            labelClassName='col-xs-2'
                            wrapperClassName='col-xs-10'
                        >
                            <option key='json' value='json'>json</option>
                            <option key='xml' value='xml'>json</option>
                        </Input>
                        <Input
                            type="submit"
                            value="Search!"
                            wrapperClassName="col-xs-offset-2 col-xs-2" />
                    </form>
                </Well>
            </div>
        )

    }
});