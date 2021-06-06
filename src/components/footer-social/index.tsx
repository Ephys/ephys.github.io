import React from 'react';
import { H2, TextLink } from '../markdown-text';
import Container from '../container';
import * as css from './style.module.scss';

export default function FooterSocial(props: { id: string }) {

  return (
    <Container id={props.id} component="footer" className={css.footer}>
      <div className="section">
        <H2 transparent>Let's get in touch?</H2>
        <div className={css.contactInfo}>
          <a target="_blank" href="mailto:hello@guylian.me" className={css.button}>
            <span>hello@guylian.me</span>
          </a>

          <div className={css.socialLinks}>
            <a href="https://github.com/ephys" title="My GitHub">
              <svg width="70" height="68" viewBox="0 0 70 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2708 54.7432C23.2708 55.0237 22.9482 55.2481 22.5414 55.2481C22.0785 55.2902 21.7559 55.0658 21.7559 54.7432C21.7559 54.4626 22.0785 54.2382 22.4853 54.2382C22.9061 54.1961 23.2708 54.4205 23.2708 54.7432ZM18.9084 54.1119C18.8102 54.3925 19.0907 54.7151 19.5115 54.7993C19.8762 54.9395 20.2971 54.7993 20.3812 54.5187C20.4654 54.2382 20.1989 53.9156 19.7781 53.7893C19.4134 53.6911 19.0066 53.8314 18.9084 54.1119ZM25.1083 53.8735C24.7015 53.9717 24.421 54.2382 24.4631 54.5608C24.5051 54.8414 24.8699 55.0237 25.2907 54.9255C25.6974 54.8273 25.978 54.5608 25.9359 54.2803C25.8938 54.0138 25.5151 53.8314 25.1083 53.8735ZM34.3381 0.12207C14.8826 0.12207 0 14.8925 0 34.3479C0 49.9039 9.79084 63.2155 23.7757 67.9005C25.5712 68.2231 26.2024 67.115 26.2024 66.2032C26.2024 65.3335 26.1603 60.5363 26.1603 57.5906C26.1603 57.5906 16.3414 59.6947 14.2795 53.4106C14.2795 53.4106 12.6804 49.3287 10.38 48.2767C10.38 48.2767 7.16779 46.0745 10.6044 46.1166C10.6044 46.1166 14.0971 46.3971 16.0188 49.7355C19.0907 55.1499 24.2386 53.593 26.2445 52.6672C26.5671 50.4229 27.4789 48.8659 28.4888 47.9401C20.6477 47.0704 12.7365 45.9342 12.7365 32.4403C12.7365 28.5828 13.8026 26.6471 16.0469 24.1784C15.6822 23.2666 14.4899 19.5074 16.4116 14.654C19.3432 13.7423 26.0902 18.4413 26.0902 18.4413C28.8956 17.6558 31.9114 17.249 34.8991 17.249C37.8869 17.249 40.9027 17.6558 43.7081 18.4413C43.7081 18.4413 50.4551 13.7282 53.3867 14.654C55.3084 19.5214 54.1161 23.2666 53.7514 24.1784C55.9957 26.6611 57.3704 28.5969 57.3704 32.4403C57.3704 45.9763 49.1085 47.0564 41.2674 47.9401C42.5579 49.0482 43.652 51.1523 43.652 54.4486C43.652 59.1757 43.6099 65.0249 43.6099 66.1752C43.6099 67.0869 44.2551 68.195 46.0366 67.8724C60.0636 63.2155 69.5739 49.9039 69.5739 34.3479C69.5739 14.8925 53.7935 0.12207 34.3381 0.12207ZM13.6342 48.5012C13.4519 48.6414 13.494 48.964 13.7324 49.2306C13.9569 49.455 14.2795 49.5532 14.4618 49.3708C14.6442 49.2306 14.6021 48.9079 14.3636 48.6414C14.1392 48.417 13.8166 48.3188 13.6342 48.5012ZM12.1193 47.365C12.0211 47.5473 12.1614 47.7718 12.4419 47.912C12.6664 48.0523 12.9469 48.0102 13.0451 47.8138C13.1433 47.6315 13.003 47.4071 12.7225 47.2668C12.4419 47.1826 12.2175 47.2247 12.1193 47.365ZM16.6641 52.3586C16.4396 52.5409 16.5238 52.9617 16.8464 53.2283C17.169 53.5509 17.5758 53.593 17.7582 53.3685C17.9405 53.1862 17.8564 52.7654 17.5758 52.4988C17.2672 52.1762 16.8464 52.1341 16.6641 52.3586ZM15.065 50.2966C14.8406 50.4369 14.8406 50.8016 15.065 51.1242C15.2894 51.4468 15.6681 51.5871 15.8505 51.4468C16.0749 51.2645 16.0749 50.8998 15.8505 50.5772C15.6541 50.2545 15.2894 50.1143 15.065 50.2966Z" fill="#2B2782"/>
              </svg>
              <span>ephys</span>
            </a>

            <a href="https://twitter.com/ephys_" title="My Twitter">
              <svg width="72" height="60" viewBox="0 0 72 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64.4358 15.2814C64.4814 15.9193 64.4814 16.5574 64.4814 17.1953C64.4814 36.6536 49.6713 59.074 22.6027 59.074C14.2633 59.074 6.51652 56.6587 0 52.4665C1.18486 52.6031 2.32399 52.6487 3.55444 52.6487C10.4354 52.6487 16.7697 50.3247 21.828 46.3601C15.357 46.2234 9.93419 41.9854 8.0658 36.1524C8.97727 36.289 9.88861 36.3802 10.8457 36.3802C12.1672 36.3802 13.4888 36.1978 14.7191 35.879C7.97476 34.5118 2.91635 28.5878 2.91635 21.4333V21.2511C4.87578 22.3448 7.15447 23.0283 9.56949 23.1194C5.6049 20.4763 3.00753 15.9649 3.00753 10.861C3.00753 8.12689 3.73651 5.62055 5.01254 3.43318C12.2582 12.3649 23.1494 18.1977 35.362 18.8358C35.1342 17.7421 34.9975 16.603 34.9975 15.4637C34.9975 7.35218 41.5596 0.744629 49.7166 0.744629C53.9545 0.744629 57.7824 2.52185 60.4711 5.39275C63.7976 4.75481 66.9874 3.52436 69.8129 1.83831C68.7191 5.25613 66.3951 8.12703 63.342 9.9497C66.304 9.63087 69.1749 8.81043 71.8179 7.6713C69.8132 10.5876 67.3067 13.185 64.4358 15.2814Z" fill="#2B2782"/>
              </svg>
              <span>@ephys_</span>
            </a>

            <a href="" title="My LinkedIn">
              <svg width="64" height="63" viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4583 62.84H1.43003V20.8853H14.4583V62.84ZM7.93715 15.1623C3.77113 15.1623 0.392029 11.7116 0.392029 7.5456C0.392029 5.54451 1.18696 3.62538 2.60194 2.2104C4.01693 0.795418 5.93606 0.000488281 7.93715 0.000488281C9.93824 0.000488281 11.8574 0.795418 13.2723 2.2104C14.6873 3.62538 15.4823 5.54451 15.4823 7.5456C15.4823 11.7116 12.1018 15.1623 7.93715 15.1623ZM63.2189 62.84H50.2187V42.4167C50.2187 37.5493 50.1205 31.3073 43.4451 31.3073C36.6714 31.3073 35.6334 36.5955 35.6334 42.066V62.84H22.6192V20.8853H35.1144V26.6083H35.2968C37.0361 23.3119 41.2849 19.8332 47.6237 19.8332C60.8091 19.8332 63.2329 28.5159 63.2329 39.7936V62.84H63.2189Z" fill="#2B2782"/>
              </svg>
              <span>Guylian Cox</span>
            </a>
          </div>
        </div>
      </div>

      <div className={css.footerInfo}>
        <p className={css.vat}>VAT BE 0746.377.584</p>
        <p className={css.sourceCode}><TextLink to="https://github.com/ephys/ephys.github.io" target="_blank">Check out the source code of this website</TextLink></p>
      </div>
    </Container>
  )
}
