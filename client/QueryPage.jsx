/** @jsx React.DOM */
var React = require('react');

var request = require('browser-request');

var Input = require('react-bootstrap').Input;
var Well = require('react-bootstrap').Well;
var moment = require('moment');

var BASE_URL = 'http://169.54.240.116:8983/solr/gettingstarted/select?indent=true&';

module.exports = React.createClass({
    propTypes: {},
    getInitialState: function() {
        return {
            url: BASE_URL
        };
    },
    onSubmit: function() {
        window.open(this.state.url);
    },
    prepareTerm: function(search) {
        search = search.replace(/ /g, '+');
        var parts = search.split('"');
        search = parts.join('\\"');
        return search;
    },
    urlBuilder: function(search, format, start, num) {
        var url = BASE_URL;
        url = url + '&wt=' + format;
        url = url + '&start=' + (start || '0');
        url = url + '&row=' + num;
        url = url + '&q=' + this.prepareTerm(search);
        return url;
    },
    onChange: function() {
        var searchTerm = this.refs.search.getValue().trim();
        var format = this.refs.format.getValue().trim();
        var start = this.refs.start.getValue().trim();
        var num = this.refs.num.getValue().trim();
        this.setState({
            url: this.urlBuilder(searchTerm, format, start, num)
        });
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
                    <form className='form-horizontal' onSubmit={this.onSubmit} onChange={this.onChange}>
                        <Input
                            type='text'
                            label='Search Term'
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
                            <option key='xml' value='xml'>xml</option>
                        </Input>
                        <Input
                            type='text'
                            label='Start (default: 0)'
                            ref='start'
                            labelClassName='col-xs-2'
                            wrapperClassName='col-xs-10'
                        />
                        <Input
                            type='select'
                            label='Num Results'
                            ref='num'
                            labelClassName='col-xs-2'
                            wrapperClassName='col-xs-10'
                        >
                            <option key='10' value={10}>10</option>
                            <option key='25' value={25}>25</option>
                            <option key='50' value={50}>50</option>
                            <option key='100' value={100}>100</option>
                        </Input>
                        <Input
                            type="submit"
                            value="Search!"
                            wrapperClassName="col-xs-offset-2 col-xs-2" />
                    </form>
                </Well>
                <span>{this.state.url}</span>
            </div>
        )

    }
});