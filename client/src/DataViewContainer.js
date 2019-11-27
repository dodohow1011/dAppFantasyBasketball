/**
 * Created by gy on 4/12/18.
 */
import React from 'react';
import { CountSlider } from './CountSlider';
import { Radio, Switch, Row, Col } from 'antd';
import _ from 'lodash';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayTooltip: true
    }

    onCountSliderChange = (count) => {
        // console.log(count);
        this.setState({ minCount: count });
    }

    onChartTypeChange = (e) => {
        console.log(e.target.value);
        this.setState({ chartType: e.target.value });
    }

    onTooltipChange = (displayTooltip) => {
        // console.log(displayTooltip);
        this.setState({ displayTooltip });
    }

    render() {
        return (
            <div className="data-view">
                <div className="filter">
                    {this.state.chartType === 'hexbin' ?
                        <CountSlider onCountSliderChange={_.debounce(this.onCountSliderChange, 500)} /> : null }
                    <br/>
                    <Row className="chart-type-radio">
                        <Col span={12} offset={0}>
                            <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                                <Radio value="hexbin">hexbin</Radio>
                                <Radio value="scatter">scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={6}>
                            Tooltip:{' '}
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                onChange={this.onTooltipChange}
                                defaultChecked />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
