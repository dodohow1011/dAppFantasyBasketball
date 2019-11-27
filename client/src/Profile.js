/**
 * Created by gy on 4/7/18.
 */
import React from 'react';
import { PROFILE_PIC_URL_PREFIX } from './constants';

export class Profile extends React.Component {
    render() {
        const {
            teamAbbreviation,
            teamCity,
            teamName,
            playerName,
            height,
            weight,
            playerId,
        } = this.props.playerInfo;

        return (
            <div className="profile">
                <div className="profile-entry player-name">{`${playerName}`}</div>
                <img className="profile-pic"
                     src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                     alt="Profile"/>
                <div className="profile-entry">
                    <div className="profile-entry-left">Team</div>
                    <div className="profile-entry-right">{`${teamCity} ${teamName}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Height</div>
                    <div className="profile-entry-right">{`${height}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Weight</div>
                    <div className="profile-entry-right">{`${weight}`}</div>
                </div>
            </div>
        );
    }
}
