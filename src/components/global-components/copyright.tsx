import Link from 'next/link';
import {Component} from "react";

interface Props {}

interface State {}

class CopyRight extends Component<Props, State> {
  render() {

    return (
      <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
        <div className="container-fluid ltn__border-top-2">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="ltn__copyright-design clearfix">
                <p>
                  Все права сохранены @ M <sup>2</sup> <span className="current-year" />
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 align-self-center">
              <div className="ltn__copyright-menu text-end">
                <ul className="go-top">
                  <li>
                    <Link href="/about">Условия использования</Link>
                  </li>
                  <li>
                    <Link href="/about">Требования</Link>
                  </li>
                  <li>
                    <Link href="/about">Политика конфеденциальности</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CopyRight;
