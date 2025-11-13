import { Icon } from '@iconify/react';
import React from 'react';

export default function ContactInfoWidget() {
  return (
    <ul className="cs_contact_widget">
      <li>
        <i className="cs_accent_bg">
          <Icon icon="ep:location" />
        </i>
     Shaligram Village complex, Opposite staff College, Jawalakhel-4, Lalitpur
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>
       01-5912170, 01-5912270, 01-5912370, 01-5421316
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
      info@heliosnepal.com, appointment@heliosnepal.com
      </li>
    </ul>
  );
}
