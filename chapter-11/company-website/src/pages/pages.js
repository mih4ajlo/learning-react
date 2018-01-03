import { Link, Route } from 'react-router-dom'
import { MainMenu, AboutMenu } from '../components/menus'
import '../stylesheets/pages.scss'

import {PageTemplate} from '../components/PageTemplate'





export const Whoops404 = ({ location }) =>
    <div className="whoops-404">
        <h1>Resource not found at '{location.pathname}'</h1>
    </div>

export const Events = () =>
    <PageTemplate>
      <section className="events">
          <h1>[Event Calendar]</h1>
      </section>
    </PageTemplate>

export const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>[Product Catalog]</h1>
        </section>
    </PageTemplate>
    
export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[Contact Us]</h1>
        </section>
    </PageTemplate>

