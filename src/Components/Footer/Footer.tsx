import { Link } from "react-router-dom";
import Navigation from "../Models/Navigation";

export default function Footer() {
  return (
    <>
      <div>
        <div className="w-full  bg-cover bg-center bg-no-repeat bg-[url('Footer/FooterBgMobile.svg')] sm:bg-[url('Footer/FooterBgTablet.svg')] lg:bg-[url('Footer/FooterBgDesktop.svg')]">
          <div className="flex flex-col items-center justify-center text-center py-22 px-8 gap-10 md:py-15.5 lg:py-25.5 lg:flex-row lg:justify-between lg:px-0 lg:w-[77.08%] lg:mx-auto lg:text-left ">
            <p className="text-white title md:w-114.25 lg:w-103.75">
              Sign up and Scoot off today
            </p>
            <div className="flex gap-[12.86px]">
              <div className="bg-[#E5ECF4] rounded-sm pt-[5.71px] pb-[6.43px] px-[11.43px] flex items-center justify-center gap-[8.38px]">
                <img src="Footer/AppStore.svg" alt="" />
                <div className="flex flex-col text-[#495567]">
                  <p className="font-bold text-[10px] tracking-[-0.45px]">
                    Available on the
                  </p>
                  <p className="font-bold text-[20px] leading-6 tracking-[-0.89px]">
                    AppStore
                  </p>
                </div>
              </div>
              <div className="bg-[#E5ECF4] rounded-sm pt-[5.71px] pb-[6.43px] px-[11.43px] flex items-center justify-center gap-[8.38px]">
                <img src="Footer/GooglePlay.svg" alt="" />
                <div className="flex flex-col text-[#495567]">
                  <p className="font-bold text-[10px] tracking-[-0.45px]">
                    Get it on
                  </p>
                  <p className="font-bold text-[20px] leading-6 tracking-[-0.89px]">
                    GooglePlay
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-21.25 bg-[#333A44] items-center pt-16 pb-22 md:py-8 md:px-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-[41.44px] items-center md:flex-row md:gap-[58.58px]">
            <Link to="/">
              <img src="Logo/scootWhite.svg" alt="" />
            </Link>
            <div>
              <Navigation />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#FCB72B] hover:fill-[#E5ECF4]"
              >
                <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" />
              </svg>
            </a>
            <a className="cursor-pointer">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                className="fill-[#FCB72B] hover:fill-[#E5ECF4]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 2.309C23.117 2.701 22.168 2.965 21.172 3.084C22.189 2.475 22.97 1.51 23.337 0.36C22.386 0.924 21.332 1.334 20.21 1.555C19.313 0.598 18.032 0 16.616 0C13.437 0 11.101 2.966 11.819 6.045C7.728 5.84 4.1 3.88 1.671 0.901C0.381 3.114 1.002 6.009 3.194 7.475C2.388 7.449 1.628 7.228 0.965 6.859C0.911 9.14 2.546 11.274 4.914 11.749C4.221 11.937 3.462 11.981 2.69 11.833C3.316 13.789 5.134 15.212 7.29 15.252C5.22 16.875 2.612 17.6 0 17.292C2.179 18.689 4.768 19.504 7.548 19.504C16.69 19.504 21.855 11.783 21.543 4.858C22.505 4.163 23.34 3.296 24 2.309Z" />
              </svg>
            </a>
            <a className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-[#FCB72B] hover:fill-[#E5ECF4]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
