import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
}

export function AcumaticaEcosystem({ className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    // Integration categories data
    const integrationCategories = [
      {
        name: "CRM",
        icon: "👥",
        class: "crm",
        position: 0,
        items: ["Dynamics 365 CRM", "Sage CRM", "Salesforce"],
        description: "Acumatica integrates with leading CRM platforms, enabling businesses to manage customer relationships, sales pipelines, and marketing campaigns seamlessly alongside their ERP system."
      },
      {
        name: "E-Commerce",
        icon: "🛒",
        class: "ecommerce",
        position: 1,
        items: ["Magento", "Shopify", "WooCommerce"],
        description: "Acumatica's integration with these e-commerce platforms allows businesses to manage online sales, inventory, and order fulfillment directly through the ERP system, ensuring a unified workflow for online retail operations."
      },
      {
        name: "AP Automation & Payments",
        icon: "💳",
        class: "payments",
        position: 2,
        items: ["Medius", "Checkbook"],
        description: "These tools support accounts payable automation and payment processing, streamlining financial operations by automating invoice processing and payments."
      },
      {
        name: "Tax Compliance",
        icon: "📝",
        class: "tax",
        position: 3,
        items: ["Avalara"],
        description: "Integration with Avalara highlights Acumatica's capability to handle tax compliance, ensuring accurate tax calculations and reporting for businesses operating in multiple jurisdictions."
      },
      {
        name: "POS",
        icon: "🏪",
        class: "pos",
        position: 4,
        items: ["ConnectPOS"],
        description: "Integration with ConnectPOS indicates that Acumatica can support retail businesses by connecting with point-of-sale systems, enabling real-time inventory and sales tracking."
      },
      {
        name: "Other Apps",
        icon: "📲",
        class: "other",
        position: 5,
        items: ["Rent Manager", "Revio", "Blackline", "FTP/SFTP"],
        description: "These apps cover a range of functions, such as property management (Rent Manager), financial reconciliation (Blackline), and file transfer protocols (FTP/SFTP), showing Acumatica's broad compatibility with various business tools."
      },
      {
        name: "Your Systems with APIs",
        icon: "🔌",
        class: "custom",
        position: 6,
        items: ["Custom System Integrations", "Proprietary Platforms", "Legacy Systems"],
        description: "Acumatica's flexibility allows integration with custom or proprietary systems via APIs (Application Programming Interfaces), enabling businesses to connect their unique systems to Acumatica for a tailored solution."
      }
    ];

    // Create the ecosystem
    if (containerRef.current) {
      const container = containerRef.current;
      
      // Reset container inner HTML
      container.innerHTML = `
      <style>
        :root {
            --primary: #0072ff;
            --primary-dark: #005cbf;
            --secondary: #ff4081;
            --background: #f8fafc;
            --surface: #ffffff;
            --text-primary: #2d3748;
            --text-secondary: #4a5568;
            --text-tertiary: #718096;
            --shadow-sm: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            --shadow-md: 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06);
            --shadow-lg: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
            --radius-sm: 4px;
            --radius-md: 8px;
            --radius-lg: 16px;
            --radius-xl: 24px;
            --space-xs: 4px;
            --space-sm: 8px;
            --space-md: 16px;
            --space-lg: 24px;
            --space-xl: 32px;
            --space-xxl: 48px;
            --transition-fast: 150ms ease;
            --transition-medium: 300ms ease;
            --transition-slow: 500ms cubic-bezier(0.23, 1, 0.32, 1);
            
            /* Category Colors */
            --crm-gradient: linear-gradient(135deg, #4299e1, #3182ce);
            --ecommerce-gradient: linear-gradient(135deg, #48bb78, #38a169);
            --payments-gradient: linear-gradient(135deg, #ecc94b, #d69e2e);
            --tax-gradient: linear-gradient(135deg, #f56565, #e53e3e);
            --pos-gradient: linear-gradient(135deg, #38b2ac, #319795);
            --other-gradient: linear-gradient(135deg, #667eea, #5a67d8);
            --custom-gradient: linear-gradient(135deg, #ed8936, #dd6b20);
        }
        
        .acumatica-ecosystem-container * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        .acumatica-ecosystem-container {
            background-color: var(--background);
            color: var(--text-primary);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            line-height: 1.5;
            width: 100%;
            position: relative;
            min-height: 800px;
        }
        
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        }
        
        .acumatica-ecosystem-inner {
            width: 100%;
            max-width: 1200px;
            padding: var(--space-xl);
            background-color: var(--surface);
            border-radius: var(--radius-lg);
            position: relative;
            overflow: hidden;
        }
        
        .background-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(circle at 25px 25px, rgba(0, 114, 255, 0.03) 2px, transparent 0),
                radial-gradient(circle at 75px 75px, rgba(0, 114, 255, 0.03) 2px, transparent 0);
            background-size: 100px 100px;
            opacity: 0.6;
            z-index: 0;
        }
        
        .ecosystem-header {
            position: relative;
            z-index: 1;
            text-align: center;
            margin-bottom: var(--space-xxl);
        }
        
        .ecosystem-header h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: var(--space-md);
            letter-spacing: -0.5px;
        }
        
        .ecosystem-header p {
            font-size: 1.125rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto;
        }
        
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }

        .ecosystem-container {
            position: relative;
            margin: 0 auto;
            width: 800px;
            height: 800px;
            z-index: 1;
        }
        
        .orbit-circles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .orbit {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            border: 1px dashed rgba(0, 114, 255, 0.15);
        }
        
        .orbit:nth-child(1) {
            width: 70%;
            height: 70%;
            animation: orbit-rotate 120s linear infinite;
        }
        
        .orbit:nth-child(2) {
            width: 85%;
            height: 85%;
            animation: orbit-rotate 180s linear infinite reverse;
        }
        
        .orbit:nth-child(3) {
            width: 100%;
            height: 100%;
            animation: orbit-rotate 240s linear infinite;
        }
        
        @keyframes orbit-rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .acumatica-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 220px;
            height: 220px;
            border-radius: 50%;
            background: var(--surface);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 10;
            box-shadow: 
                0 0 0 10px rgba(255, 255, 255, 0.8),
                0 0 0 11px rgba(0, 114, 255, 0.2),
                var(--shadow-lg);
            transition: all var(--transition-slow);
        }
        
        .acumatica-center::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 90%;
            height: 90%;
            border-radius: 50%;
            background: radial-gradient(circle at center, rgba(0, 114, 255, 0.05) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            animation: pulse 6s infinite alternate ease-in-out;
        }
        
        @keyframes pulse {
            0% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.4); }
        }
        
        .acumatica-center:hover {
            transform: translate(-50%, -50%) scale(1.05);
        }
        
        .acumatica-logo {
            margin-bottom: var(--space-md);
            transition: all var(--transition-medium);
        }
        
        .acumatica-center:hover .acumatica-logo {
            transform: scale(1.1);
        }
        
        .acumatica-center p {
            font-size: 1rem;
            font-weight: 500;
            color: var(--primary);
            text-align: center;
        }
        
        .data-flow-circle {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 300px;
            border-radius: 50%;
            border: 2px solid transparent;
            pointer-events: none;
            z-index: 5;
        }
        
        .data-flow-circle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            border-radius: 50%;
            border: 4px solid transparent;
            border-top: 4px solid rgba(0, 114, 255, 0.7);
            animation: rotate 4s linear infinite;
        }
        
        .data-flow-circle::after {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            width: calc(100% - 10px);
            height: calc(100% - 10px);
            border-radius: 50%;
            border: 4px solid transparent;
            border-right: 4px solid rgba(255, 64, 129, 0.7);
            animation: rotate 5s linear infinite reverse;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .integration-category {
            position: absolute;
            width: 130px;
            height: 130px;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            overflow: hidden;
            z-index: 5;
            box-shadow: var(--shadow-md);
            transition: all var(--transition-slow);
            opacity: 0;
            transform: scale(0.4);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            transform: translate3d(0, 0, 0) scale(0.4);
            -webkit-transform: translate3d(0, 0, 0) scale(0.4);
            -moz-transform: translate3d(0, 0, 0) scale(0.4);
        }
        
        .integration-category.animate-in {
            opacity: 1;
            transform: scale(1);
            transform: translate3d(0, 0, 0) scale(1);
            -webkit-transform: translate3d(0, 0, 0) scale(1);
            -moz-transform: translate3d(0, 0, 0) scale(1);
        }
        
        .integration-category::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: inherit;
            opacity: 0.9;
            z-index: -1;
        }
        
        .integration-category::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.2) 0%, transparent 60%);
            z-index: 1;
        }
        
        .integration-category:hover {
            transform: translateY(-8px) scale(1.05);
            transform: translate3d(0, -8px, 0) scale(1.05);
            -webkit-transform: translate3d(0, -8px, 0) scale(1.05);
            -moz-transform: translate3d(0, -8px, 0) scale(1.05);
            box-shadow: var(--shadow-lg);
        }
        
        .integration-category h3 {
            font-size: 1rem;
            font-weight: 600;
            text-align: center;
            padding: 0 var(--space-sm);
            color: white;
            margin-top: var(--space-sm);
            z-index: 2;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
        
        .integration-category .icon {
            font-size: 2.2rem;
            margin-bottom: var(--space-xs);
            color: white;
            z-index: 2;
            transition: all var(--transition-medium);
        }
        
        .integration-category:hover .icon {
            transform: scale(1.3);
        }
        
        .crm {
            background: var(--crm-gradient);
        }
        
        .ecommerce {
            background: var(--ecommerce-gradient);
        }
        
        .payments {
            background: var(--payments-gradient);
        }
        
        .tax {
            background: var(--tax-gradient);
        }
        
        .pos {
            background: var(--pos-gradient);
        }
        
        .other {
            background: var(--other-gradient);
        }
        
        .custom {
            background: var(--custom-gradient);
        }
        
        .connector {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 2px;
            transform-origin: left center;
            z-index: 2;
            overflow: visible;
            opacity: 0;
            transition: opacity var(--transition-medium);
        }
        
        .connector.animate-in {
            opacity: 1;
        }
        
        .connector-line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-origin: left center;
        }
        
        .connector-line::before {
            content: '';
            position: absolute;
            top: -1px;
            left: 0;
            width: 100%;
            height: 4px;
            border-radius: 4px;
            background: linear-gradient(90deg, rgba(0, 114, 255, 0.2), transparent);
        }
        
        .connector-pulse {
            position: absolute;
            top: -4px;
            left: 0;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: var(--primary);
            animation: pulse-flow 3s infinite;
            opacity: 0.8;
        }
        
        @keyframes pulse-flow {
            0% { left: 0; opacity: 0.8; }
            50% { opacity: 1; }
            100% { left: calc(100% - 10px); opacity: 0; }
        }
        
        .integration-details {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--surface);
            border-radius: var(--radius-lg);
            padding: var(--space-xl);
            z-index: 20;
            opacity: 0;
            pointer-events: none;
            transition: all var(--transition-slow);
            transform: translateY(20px) scale(0.98);
            box-shadow: var(--shadow-lg);
            overflow: hidden;
        }
        
        .integration-details.active {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0) scale(1);
        }
        
        .integration-details-content {
            max-width: 700px;
            margin: 0 auto;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        .integration-details-header {
            display: flex;
            align-items: center;
            margin-bottom: var(--space-xl);
            padding-bottom: var(--space-lg);
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        
        .integration-details-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: var(--space-lg);
            font-size: 1.8rem;
            color: white;
        }
        
        .integration-details h2 {
            color: var(--text-primary);
            font-size: 1.8rem;
            font-weight: 600;
            margin: 0;
        }
        
        .close-btn {
            position: absolute;
            top: var(--space-lg);
            right: var(--space-lg);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #f1f5f9;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--text-secondary);
            font-size: 1.2rem;
            transition: all var(--transition-medium);
            border: none;
            outline: none;
            box-shadow: var(--shadow-sm);
        }
        
        .close-btn:hover {
            background-color: #e2e8f0;
            transform: rotate(90deg);
            color: var(--secondary);
        }
        
        .integration-details-body {
            flex: 1;
            overflow: auto;
        }
        
        .integration-items {
            margin-bottom: var(--space-xl);
        }
        
        .integration-items h3 {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: var(--space-md);
        }
        
        .integration-list {
            list-style-type: none;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: var(--space-md);
        }
        
        /* Animation for details panel */
        @keyframes shimmer {
            0% { background-position: -468px 0 }
            100% { background-position: 468px 0 }
        }

        .integration-item {
            background-color: #f8fafc;
            border-radius: var(--radius-md);
            padding: var(--space-md);
            box-shadow: var(--shadow-sm);
            transition: all var(--transition-medium);
            opacity: 0;
            transform: translateY(20px);
            border-left: 3px solid var(--primary);
            position: relative;
            overflow: hidden;
        }
        
        .integration-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .integration-item::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.4), rgba(255,255,255,0));
            transform: translateX(-100%);
        }

        .integration-item:hover::after {
            animation: shimmer 1.5s infinite;
        }

        .integration-item:hover {
            box-shadow: var(--shadow-md);
            transform: translateY(-4px);
        }
        
        .integration-description {
            background-color: #f8fafc;
            border-radius: var(--radius-md);
            padding: var(--space-lg);
            color: var(--text-secondary);
            line-height: 1.6;
            box-shadow: var(--shadow-sm);
            border-left: 3px solid var(--primary);
            margin-top: var(--space-lg);
            opacity: 0;
            transform: translateY(20px);
            transition: all var(--transition-medium);
            transition-delay: 300ms;
        }
        
        .integration-description.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .legend {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: var(--space-lg);
            margin-top: var(--space-xxl);
            padding-top: var(--space-lg);
            border-top: 1px solid rgba(0, 0, 0, 0.08);
            position: relative;
            z-index: 1;
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            font-size: 0.9rem;
            color: var(--text-secondary);
            padding: var(--space-sm) var(--space-lg);
            border-radius: 30px;
            background-color: white;
            box-shadow: var(--shadow-sm);
            transition: all var(--transition-medium);
        }
        
        .legend-item:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-md);
        }
        
        .legend-color {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-right: var(--space-sm);
            background: var(--primary-gradient);
        }
        
        .legend-color.crm { background: var(--crm-gradient); }
        .legend-color.ecommerce { background: var(--ecommerce-gradient); }
        .legend-color.payments { background: var(--payments-gradient); }
        .legend-color.tax { background: var(--tax-gradient); }
        .legend-color.pos { background: var(--pos-gradient); }
        .legend-color.other { background: var(--other-gradient); }
        .legend-color.custom { background: var(--custom-gradient); }
        
        @media (max-width: 900px) {
            .ecosystem-container {
                width: 700px;
                height: 700px;
            }
            
            .integration-category {
                width: 110px;
                height: 110px;
            }
            
            .acumatica-center {
                width: 180px;
                height: 180px;
            }
            
            .integration-category .icon {
                font-size: 1.8rem;
            }
            
            .integration-category h3 {
                font-size: 0.9rem;
            }
            
            .legend-item {
                font-size: 0.8rem;
                padding: var(--space-xs) var(--space-md);
            }
        }
        
        @media (max-width: 767px) {
            .acumatica-ecosystem-inner {
                padding: var(--space-lg);
            }
            
            .ecosystem-container {
                width: 500px;
                height: 500px;
            }
            
            .integration-category {
                width: 90px;
                height: 90px;
            }
            
            .acumatica-center {
                width: 150px;
                height: 150px;
            }
            
            .integration-category .icon {
                font-size: 1.5rem;
            }
            
            .integration-category h3 {
                font-size: 0.8rem;
            }
            
            .legend {
                gap: var(--space-md);
            }
            
            .legend-item {
                font-size: 0.75rem;
                padding: 6px 12px;
            }
            
            .integration-details {
                padding: var(--space-lg);
            }
            
            .integration-details-icon {
                width: 50px;
                height: 50px;
                font-size: 1.5rem;
            }
            
            .integration-details h2 {
                font-size: 1.5rem;
            }
            
            .integration-list {
                grid-template-columns: 1fr;
            }
        }
        
        @media (max-width: 550px) {
            .ecosystem-container {
                width: 350px;
                height: 350px;
            }
            
            .integration-category {
                width: 70px;
                height: 70px;
            }
            
            .acumatica-center {
                width: 120px;
                height: 120px;
            }
            
            .integration-category .icon {
                font-size: 1.2rem;
            }
            
            .integration-category h3 {
                font-size: 0.7rem;
            }
            
            .ecosystem-header h2 {
                font-size: 1.8rem;
            }
            
            .ecosystem-header p {
                font-size: 1rem;
            }
        }
      </style>
      
      <div class="acumatica-ecosystem-inner">
        <div class="background-pattern"></div>
        
        <div class="ecosystem-header">
          <h2>Acumatica Integration Ecosystem</h2>
          <p>Discover how Acumatica connects with various business applications to create a seamless workflow for your organization</p>
        </div>
        
        <div class="ecosystem-container">
          <div class="orbit-circles">
            <div class="orbit"></div>
            <div class="orbit"></div>
            <div class="orbit"></div>
          </div>
          
          <div class="data-flow-circle"></div>
          
          <!-- Center - Acumatica -->
          <div class="acumatica-center">
            <svg class="acumatica-logo" width="150" height="50" viewBox="0 0 400 120">
              <path d="M100 10 C50 10, 30 50, 30 85" fill="none" stroke="#0072ff" stroke-width="20" stroke-linecap="round" />
              <text x="130" y="60" font-family="Arial" font-size="42" font-weight="bold" fill="#2d3748">Acumatica</text>
              <text x="170" y="90" font-family="Arial" font-size="28" fill="#0072ff">The Cloud ERP</text>
            </svg>
          </div>
          
          <!-- Integration Details Panel -->
          <div class="integration-details">
            <div class="integration-details-content">
              <div class="integration-details-header">
                <div class="integration-details-icon crm">
                  <span class="icon">👥</span>
                </div>
                <h2>Integration Category</h2>
              </div>
              
              <div class="integration-details-body">
                <div class="integration-items">
                  <h3>Available Integrations</h3>
                  <div class="integration-list" id="integration-list"></div>
                </div>
                
                <div class="integration-description" id="integration-description">
                  Integration details will appear here.
                </div>
              </div>
            </div>
            
            <button class="close-btn">✕</button>
          </div>
        </div>
        
        <div class="legend">
          <div class="legend-item">
            <div class="legend-color crm"></div>
            <span>CRM</span>
          </div>
          <div class="legend-item">
            <div class="legend-color ecommerce"></div>
            <span>E-Commerce</span>
          </div>
          <div class="legend-item">
            <div class="legend-color payments"></div>
            <span>AP Automation</span>
          </div>
          <div class="legend-item">
            <div class="legend-color tax"></div>
            <span>Tax Compliance</span>
          </div>
          <div class="legend-item">
            <div class="legend-color pos"></div>
            <span>POS</span>
          </div>
          <div class="legend-item">
            <div class="legend-color other"></div>
            <span>Other Apps</span>
          </div>
          <div class="legend-item">
            <div class="legend-color custom"></div>
            <span>Custom APIs</span>
          </div>
        </div>
      </div>
      `;

      // Create the ecosystem with JavaScript
      const detailsPanel = container.querySelector('.integration-details');
      const closeBtn = container.querySelector('.close-btn');
      const integrationList = container.querySelector('#integration-list');
      const integrationDescription = container.querySelector('#integration-description');
      const detailsIcon = container.querySelector('.integration-details-icon');
        
      // Close integration details panel
      closeBtn.addEventListener('click', function() {
        detailsPanel.classList.remove('active');
        
        // Reset animation classes when panel closes
        setTimeout(() => {
          const items = integrationList.querySelectorAll('.integration-item');
          items.forEach(item => item.classList.remove('animate-in'));
          integrationDescription.classList.remove('animate-in');
        }, 500);
      });
      
      // Create category elements with staggered animation
      integrationCategories.forEach((category, index) => {
        // Calculate position in a circle
        const angle = (index * (360 / integrationCategories.length) + 270) % 360;
        const radius = 300; // Adjust for desired distance from center
        const x = radius * Math.cos(angle * Math.PI / 180);
        const y = radius * Math.sin(angle * Math.PI / 180);
        
        // Create connector
        const connector = document.createElement('div');
        connector.className = 'connector';
        const distance = Math.sqrt(x*x + y*y);
        connector.style.width = `${distance - 110}px`; // Adjusted for larger category bubbles
        connector.style.transform = `translate(0, -50%) rotate(${angle}deg)`;
        
        // Create the line with animation
        const connectorLine = document.createElement('div');
        connectorLine.className = 'connector-line';
        connector.appendChild(connectorLine);
        
        // Create pulsing dot
        const connectorPulse = document.createElement('div');
        connectorPulse.className = 'connector-pulse';
        connectorPulse.style.animationDelay = `${index * 0.5}s`;
        connector.appendChild(connectorPulse);
        
        container.querySelector('.ecosystem-container').appendChild(connector);
        
        // Create category bubble
        const categoryElement = document.createElement('div');
        categoryElement.className = `integration-category ${category.class}`;
        categoryElement.style.left = `calc(50% + ${x}px - 65px)`; // Center adjustment for 130px width
        categoryElement.style.top = `calc(50% + ${y}px - 65px)`; // Center adjustment for 130px height
        
        categoryElement.innerHTML = `
          <div class="icon">${category.icon}</div>
          <h3>${category.name}</h3>
        `;
        
        // Show details on click
        categoryElement.addEventListener('click', function() {
          // Update header
          container.querySelector('.integration-details h2').textContent = category.name;
          detailsIcon.className = `integration-details-icon ${category.class}`;
          detailsIcon.innerHTML = `<span class="icon">${category.icon}</span>`;
          
          // Clear and populate the list
          integrationList.innerHTML = '';
          
          // Add items with animation
          category.items.forEach((item, i) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'integration-item';
            itemElement.textContent = item;
            integrationList.appendChild(itemElement);
            
            // Trigger animation after a delay
            setTimeout(() => {
              itemElement.classList.add('animate-in');
            }, 100 + i * 100);
          });
          
          // Update description and animate with call-to-action
          integrationDescription.innerHTML = `
            ${category.description}
            <div class="text-center mt-6 bg-gradient-to-r from-yellow-500 to-yellow-400 text-blue-900 p-3 rounded-lg font-medium animate-pulse">
              Contact us for expert integration support!
            </div>
          `;
          
          // Show panel
          detailsPanel.classList.add('active');
          
          // Animate description after items
          setTimeout(() => {
            integrationDescription.classList.add('animate-in');
          }, 100 + category.items.length * 100);
        });
        
        container.querySelector('.ecosystem-container').appendChild(categoryElement);
        
        // Animate in with staggered timing
        setTimeout(() => {
          categoryElement.classList.add('animate-in');
          setTimeout(() => {
            connector.classList.add('animate-in');
          }, 200);
        }, 500 + index * 150);
      });
      
      // Add a subtle hover effect to the Acumatica center logo
      const acumaticaCenter = container.querySelector('.acumatica-center');
      const acumaticaLogo = container.querySelector('.acumatica-logo');
      
      acumaticaCenter.addEventListener('mouseenter', function() {
        acumaticaLogo.querySelector('path').setAttribute('stroke', '#ff4081');
        acumaticaLogo.querySelector('text:last-child').setAttribute('fill', '#ff4081');
      });
      
      acumaticaCenter.addEventListener('mouseleave', function() {
        acumaticaLogo.querySelector('path').setAttribute('stroke', '#0072ff');
        acumaticaLogo.querySelector('text:last-child').setAttribute('fill', '#0072ff');
      });
    }
  }, []);

  return (
    <div className={`acumatica-ecosystem-container ${className}`} ref={containerRef}></div>
  );
}
