/**
 * Created by gy on 4/14/18.
 */
import React from 'react';
import nba from 'nba';
import { AutoComplete, Input, Icon } from 'antd';
import { PROFILE_PIC_URL_PREFIX } from './constants';

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(({ fullName, playerId }) => (
                <Option key={playerId} value={fullName} className="player-option">
                    <img className="player-option-image"
                         src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                         alt="PlayerImage"/>
                    <span className="player-option-label">{fullName}</span>
                </Option>
            )),
        });
    }

    onSelect = (playerName) => {
        this.props.loadPlayerInfo(playerName)
    }

    render() {
        window.nba = nba; //unnecessary, convenient for debug on explorer
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className="search-bar"
                dataSource={dataSource}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA player"
                optionLabelProp="value">
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}
