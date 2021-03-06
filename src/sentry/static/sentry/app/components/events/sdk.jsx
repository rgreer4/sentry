import React from 'react';
import SentryTypes from '../../proptypes';

import GroupEventDataSection from './eventDataSection';
import {t} from '../../locale';

class EventSdk extends React.Component {
  static propTypes = {
    group: SentryTypes.Group.isRequired,
    event: SentryTypes.Event.isRequired,
  };

  render() {
    let {group, event} = this.props;
    let data = event.sdk;

    return (
      <GroupEventDataSection
        group={group}
        event={event}
        type="sdk"
        title={t('SDK')}
        wrapTitle={true}
      >
        <table className="table key-value">
          <tbody>
            <tr key="name">
              <td className="key">Name</td>
              <td className="value">
                <pre>{data.name}</pre>
              </td>
            </tr>
            <tr key="version">
              <td className="key">Version</td>
              <td className="value">
                <pre>{data.version}</pre>
              </td>
            </tr>
            {data.clientIP && (
              <tr key="clientIP">
                <td className="key">Client IP</td>
                <td className="value">
                  <pre>{data.clientIP}</pre>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </GroupEventDataSection>
    );
  }
}

export default EventSdk;
