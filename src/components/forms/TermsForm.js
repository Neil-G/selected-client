import React from 'react'

export const TermsForm = (acceptedTermsAt, type) => {
  return (
    <div
      style={{
        maxWidth: '820px',
        margin: 'auto',
        color: '#333',
        padding: '0 16px',
      }}
    >
      <p>
        By clicking 'I agree' below, you agree to the terms at{' '}
        <a href='/terms'>getselected.com/terms</a>.
      </p>
      <p>In plain English</p>
      <ul style={{ listStyleType: 'disc' }}>
        <li>First, thank you for using Selected!</li>
        <li>
          You agree to not circumvent us in any way. We pour a lot of love into
          Selected and hope you appreciate it!
        </li>
        <li>
          If you contact a candidate using Selected, you affirm that you're not
          currently in active discussions with said candidate.
        </li>
        <li>
          Selected offers two pricing options: i) pay only on successful hire or
          ii) flat rate upfront for unlimited hires for 12 months.
        </li>
      </ul>
      <p style={{ textDecoration: 'underline' }}>
        Option 1: Pay per successful hire
      </p>
      <ul style={{ listStyleType: 'disc', paddingInlineStart: '40px' }}>
        <li>100% success-based</li>
        <li>
          ${['religious', 'independent'].includes(type) ? '3' : '2'},000 per
          teacher
        </li>
        <li>
          ${['religious', 'independent'].includes(type) ? '6' : '4'},000 per
          leadership position
        </li>
        <li>The fee is due when a candidate signs and agrees to the offer.</li>
        <li>You must notify Selected if a candidate accepts your job offer.</li>
        <li>
          Every hire has a satisfaction guarantee for 90 days after start date.
        </li>
      </ul>
      <p style={{ textDecoration: 'underline' }}>
        Option 2: Unlimited hires for 12 months
      </p>
      <ul style={{ paddingInlineStart: '40px' }}>
        <li>
          Pay a flat fee upfront for unlimited hires on Selected for a 12 month
          period. The annual fee is based on student enrollment count. If
          interested to learn your rate, please contact us.
        </li>
      </ul>
      <p>
        Questions? Reach us at{' '}
        <a href='mailto:hello@getselected.com?subject=Questions about school terms'>
          hello@getselected.com
        </a>
      </p>
      <input
        type='checkbox'
        checked={acceptedTermsAt}
        onClick={() =>
          // updater.updateUserField({
          //   key: 'acceptedTermsAt',
          //   value: !acceptedTermsAt ? new Date() : null,
          // })
          console.log('Clicked')
        }
      />{' '}
      I have read and agreed to the terms above
    </div>
  )
}
